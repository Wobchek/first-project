import React from 'react';
import Pagination from "../common/Pagination/Pagination";
import User from "./User";

let Users = ({totalUsersCount, currentPage, pageSize, onPageChanged, users, ...props}) => {
    return (
        <div>
            <Pagination totalUsersCount={totalUsersCount} currentPage={currentPage} pageSize={pageSize}
                        onPageChanged={onPageChanged}/>
            <div>
                {users.map(user => <User user={user} key={user.id} isAuth={props.isAuth}
                                         followingInProgress={props.followingInProgress}
                                         unfollow={props.unfollow} follow={props.follow}
                />)}
            </div>
        </div>)
}

export default Users;
