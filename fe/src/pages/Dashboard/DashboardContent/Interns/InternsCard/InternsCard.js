import React from 'react';

import style from './InternsCard.module.css';

const InternsCard = ({intern}) => {
    return (
        <div className={style.card}>
        <span className={style.intern}>{intern}</span>
    </div>
    );
}
 
export default InternsCard;