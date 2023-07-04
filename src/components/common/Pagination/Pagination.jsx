import React from 'react';
import styles from './Pagination.module.css';

let Pagination = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        if (pages.length < 50) {
            pages.push(i);
        }
    }

    return <div>
        {pages.map(p => {
            return <span key={p} className={currentPage === p ? styles.selectedPage : undefined}
                         onClick={(e) => {
                             onPageChanged(p);
                         }}>{p}</span>
        })}
    </div>
}

export default Pagination;
