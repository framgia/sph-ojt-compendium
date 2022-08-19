import React from "react";

import style from "./LeftNavigation.module.css";
import Avatar from "./avatar.svg";
import LeftNavigationButton from "./LeftNavigatonButton/LeftNavigationButton";
import DashboardIcon from './dashboard.svg';
import InternsIcon from './interns.svg';
import ReportsIcon from './reports.svg';
import ProfileIcon from './profile.svg';
import LogoutIcon from './logout.svg';

const LeftNavigation = () => {

    var name = "David Panonce";

    return (

        <div className={style.nav}>

            <img src={Avatar} alt="avatar" className={style.avatar}></img>
            <span className={style.name}>{name}</span>

            <LeftNavigationButton icon={DashboardIcon} label="Dashboard"/> 
            <LeftNavigationButton icon={InternsIcon} label="Interns"/>
            <LeftNavigationButton icon={ReportsIcon} label="Daily Report" />
            <LeftNavigationButton icon={ProfileIcon} label="User Profile" />

            
            <a href='#Logout' className={style.logout}>  
                <img src={LogoutIcon} alt="Logout"></img>
                <span>Logout</span>
            </a>
            
         
        </div>
    );
}
 
export default LeftNavigation;