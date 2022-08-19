import React from 'react';

import style from './DashboardContent.module.css';
import Interns from './Interns/Interns';
import Recent from './Recent/Recent';
import DailyReports from './DailyReports/DailyReports';
import UserProfile from './UserProfile/pages/UserProfile';

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
    } else if(dashboardContent === "user-profile"){
        return (
            <div className={style.content}>
                <UserProfile/>
            </div>
        );
    }
}
 
export default DashboardContent;