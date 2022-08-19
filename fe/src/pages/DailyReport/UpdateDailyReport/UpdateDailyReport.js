import React from 'react';

import style from './UpdateDailyReport.module.css';
import BackIcon from './back.svg';
import { Modal, Button, Image} from "semantic-ui-react";
import { Link } from 'react-router-dom';

const UpdateDailyReport = () => {
    
    const [open, setOpen] = React.useState(false)

    return (
        <div className={style.container}>
            <div className={style.main}>
                <Link to="/dashboard/daily-reports">
                    <div>
                            <button className={style.backButton}>
                                <img src={BackIcon} alt="Back" className={style.backIcon}></img>
                            </button>
                        </div>
                </Link>
                <div className={style.label}>
                    <span>Edit Daily Report</span>
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
                        <Modal
                            onClose={() => setOpen(false)}
                            onOpen = {() => setOpen(true)}
                            open={open}
                            trigger={
                                <div className={style.submit}>
                                <button className={style.submitButton}
                                onClick={() => setOpen(true)}
                                >Save</button></div>}>
                            <Modal.Header>Edit Daily Report</Modal.Header>
                            <Modal.Content image>
                                <Image size ="small" src="/images/logo2.png" centered wrapped/>
                            </Modal.Content>
                            <Modal.Content>    
                               <div className={style.text4}>
                                 <span>Do you want to keep these changes?</span>
                               </div>
                            </Modal.Content>
                            <Modal.Actions>
                                <Button  onClick={() => setOpen(false)}>Discard</Button>
                                <Button onClick={() => setOpen(false)} positive>Save</Button>
                            </Modal.Actions>
                        </Modal>
                    </div> 
                </div>  
            </div>
    );
}
 
export default UpdateDailyReport;