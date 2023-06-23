import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {follow, requestUsers, setCurrentPage, toggleFollowingProgress, unfollow,} from "../../redux/usersReducer";
import Users from './Users';
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/usersSelectors";

const UsersContainer = (props) => {
    useEffect(() => {
        const fetchData = async () => {
            await props.requestUsers(props.currentPage, props.pageSize);
        }
        return fetchData();
    }, []);

    let onPageChanged = (pageNumber) => {
        props.requestUsers(pageNumber, props.pageSize);
    }

    return (
        <Users totalUsersCount={props.totalUsersCount}
               pageSize={props.pageSize}
               currentPage={props.currentPage}
               onPageChanged={onPageChanged}
               users={props.users}
               follow={props.follow}
               unfollow={props.unfollow}
               followingInProgress={props.followingInProgress}
               isAuth={props.isAuth}
        />)
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        isAuth: state.auth.isAuth,
    }
};

export default compose(
    connect(mapStateToProps, {
        setCurrentPage, toggleFollowingProgress,
        requestUsers, follow, unfollow,
    })
)(UsersContainer);