import React from 'react';

import style from "./DailyReportCard.module.css";

const DailyReportCard = ({author, dateCreated}) => {
    return (
        <div className={style.card}>
            <span className={style.author}>{author}</span>
            <span className={style.dateCreated}>{dateCreated}</span>
        </div>
    );
}
 
export default DailyReportCard;