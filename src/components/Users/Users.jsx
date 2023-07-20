import React from 'react';
import Pagination from "../common/Pagination/Pagination";
import User from "./User";

let Users = ({totalItemsCount, currentPage, pageSize, onPageChanged, users, ...props}) => {
    return (
        <div>
            <Pagination totalItemsCount={totalItemsCount} currentPage={currentPage} pageSize={pageSize}
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
