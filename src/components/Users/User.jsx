import React from 'react';
import styles from './Users.module.css';
import userPhoto from "../../assets/images/user.jpg";
import {NavLink} from "react-router-dom";

let User = ({user, isAuth, followingInProgress, unfollow, follow}) => {
    return <div>
                    <span>
                        <div className={styles.usersPhoto}>
                            <NavLink to={'../profile/' + user.id}>
                            <img src={user.photos.small != null
                                ? user.photos.small
                                : userPhoto}/>
                                </NavLink>
                        </div>
                        {isAuth
                            ? <div>
                                {user.followed
                                    ? <button disabled={followingInProgress
                                        .some(id => id === user.id)}
                                              onClick={() => {
                                                  unfollow(user.id)
                                              }}>Unfollow</button>
                                    : <button disabled={followingInProgress
                                        .some(id => id === user.id)}
                                              onClick={() => {
                                                  follow(user.id)
                                              }}>Follow</button>}
                            </div>
                            : null}
                    </span>
            <span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{"user.location.country"}</div>
                            <div>{"user.location.city"}</div>
                        </span>
                    </span>
        </div>
}

export default User;
