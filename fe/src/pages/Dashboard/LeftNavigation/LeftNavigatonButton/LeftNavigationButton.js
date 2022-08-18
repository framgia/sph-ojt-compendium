import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import style from "./LeftNavigationButton.module.css";

const LeftNavigationButton = ({icon, label}) => {

    const navigate = useNavigate();


    return (
        <div className={style.navbutton} onClick={()=> navigate(`/recent/${label}`)}>
             <img src={icon} alt={label}></img>
            <span>{label}</span>
        </div> 
    );
}
 
export default LeftNavigationButton;