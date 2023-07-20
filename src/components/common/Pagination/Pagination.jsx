import React, {useState} from 'react';
import styles from './Pagination.module.css';

let Pagination = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 15}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return <div className={styles.pagination}>
        { portionNumber > 1 &&
            <button onClick={ () => { setPortionNumber( 1) }}> {"<<"} </button> }

        { portionNumber > 1 &&
            <button onClick={ () => { setPortionNumber(portionNumber - 1) }}> {`< стр. ${portionNumber - 1}`} </button> }

        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map((p) => {
            return <span key={p} className={currentPage === p ? (styles.selectedPage + " " + styles.pages) : styles.pages}
                         onClick={(e) => {
                             onPageChanged(p);
                         }}>{p}</span>
        })}

        { portionCount > portionNumber &&
            <button onClick={() => {setPortionNumber(portionNumber +1)} }> {`стр. ${portionNumber + 1} >`} </button> }

        { portionCount > portionNumber &&
            <button onClick={() => {setPortionNumber(portionCount)} }> {">>"} </button> }
    </div>
}

export default Pagination;
