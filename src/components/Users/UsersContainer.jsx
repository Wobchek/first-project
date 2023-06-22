import {connect} from "react-redux";
import {follow, getUsers, setCurrentPage, toggleFollowingProgress, unfollow,} from "../../redux/usersReducer";
import Users from './Users';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const UsersContainer = (props) => {
    props.getUsers(props.currentPage, props.pageSize);

    let onPageChanged = (pageNumber) => {
        props.getUsers(pageNumber, props.pageSize);
    };

    return (
        <Users totalUsersCount={props.totalUsersCount}
               pageSize={props.pageSize}
               currentPage={props.currentPage}
               users={props.users}
               follow={props.follow}
               unfollow={props.unfollow}
               onPageChanged={onPageChanged}
               followingInProgress={props.followingInProgress}
               isAuth={props.isAuth}
        />
    )
};

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
        isAuth: state.auth.isAuth,
    }
};

export default compose(
    connect(mapStateToProps, {
        setCurrentPage,
        toggleFollowingProgress, getUsers, follow, unfollow,
    }),
    withAuthRedirect
)(UsersContainer);