import React from 'react';

import style from './DashboardContent.module.css';
import Interns from './Interns';
import Recent from './Recent';
import DailyReports from './DailyReports';
import UserProfile from './UserProfile';

const DashboardContent = ({dashboardContent}) => {

    if(dashboardContent === "recent"){
        return (
            <div className={style.content}>
                <Recent/>
            </div>
        );
    } else if (dashboardContent === "interns"){
        return (
            <div className={style.content}>
                <Interns/>
            </div>
        );
    } else if (dashboardContent === "daily-report"){
        return (
            <div className={style.content}>
                <DailyReports/>   
            </div>
        );
    }else{
        return (
            <div className={style.content}>
                <UserProfile/>
            </div>
        );
    }
}
 
export default DashboardContent;