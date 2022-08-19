import React from 'react';

import style from './CreateDailyReport.module.css';
import BackIcon from './back.svg';

const CreateDailyReport = () => {
    return (
        <div className={style.container}>
            <div className={style.main}>
                <div>
                    <button className={style.backButton}>
                        <img src={BackIcon} alt="Back" className={style.backIcon}></img>
                    </button>
                </div>
                <div className={style.label}>
                    <p>Create New Daily Report</p>
                </div>
                <div className={style.form}>
                    <div className={style.date}>
                        <label className={style.dateLabel}>Date:</label>
                        <input className={style.dateField}></input>
                    </div>
                    <div className={style.content}>
                        <label className={style.contentLabel}>Progress:</label>
                        <span className={style.contentField} role="textbox" contentEditable></span>
                    </div>
                    <div className={style.content}>
                        <label className={style.contentLabel}>Problem/s:</label>
                        <span className={style.contentField} role="textbox" contentEditable></span>
                    </div>
                    <div className={style.content}>
                        <label className={style.contentLabel}>Learnings/Realizations:</label>
                        <span className={style.contentField} role="textbox" contentEditable></span>
                    </div>
                    <div className={style.content}>
                        <label className={style.contentLabel}>Next Meeting's Plan:</label>
                        <span className={style.contentField} role="textbox" contentEditable></span>
                    </div>
                    <div className={style.submit}>
                        <button className={style.submitButton}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default CreateDailyReport;