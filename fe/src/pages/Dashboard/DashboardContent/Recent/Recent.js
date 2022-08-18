import React from 'react';
import DailyReportCard from '../DailyReports/DailyReportCard/DailyReportCard';

import style from './Recent.module.css';

const Recent = () => {

    const recentList = [
        {
            "author": "David Brent",
            "dateCreated": "August 18, 2022"
        },
        {
            "author": "Lord Vandam",
            "dateCreated": "August 18, 2022"
        },
        {
            "author": "Nina Marie",
            "dateCreated": "August 18, 2022"
        },
        {
            "author": "Clement John",
            "dateCreated": "August 18, 2022"
        },
        {
            "author": "John Jacob",
            "dateCreated": "August 18, 2022"
        },
    ];

    return (
        <div className={style.recent}>
            <span className={style.label}>Recent</span>
            {
                recentList.map((rep) => <DailyReportCard author={rep.author} dateCreated={rep.dateCreated}/>)
            }
        </div>
    );
}
 
export default Recent;