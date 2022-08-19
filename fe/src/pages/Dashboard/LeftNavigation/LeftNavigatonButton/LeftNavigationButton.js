import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import style from "./LeftNavigationButton.module.css";

const LeftNavigationButton = ({icon, label}) => {

    const navigate = useNavigate();

    const path = label === "Dashboard" ? "recent" : label.replace(" ", "-").toLowerCase();

    return (
        <div className={style.navbutton} onClick={()=> navigate(`/dashboard/${path}`)} tabIndex="0" foc>
             <img src={icon} alt={label}></img>
            <span>{label}</span>
        </div> 
    );
}
 
export default LeftNavigationButton;