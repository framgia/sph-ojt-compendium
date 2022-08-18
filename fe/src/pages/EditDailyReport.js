import React from 'react';
import { Form, TextArea, Icon, Input } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import styles from './Comments/Create/CommentCreate.module.css';
import EditReportModal from './Modal/EditReportModal';

const EditDailyReport = () => {
  return (
    <div className={styles.FlexBox}>
      <div className={styles.ButtonBack}>
        <Link to="/profile" className="item">
          <Icon link name="arrow left" size="big" />
        </Link>
      </div>
      <div className={styles.primary}>
        <h1 className={styles.font}>Edit Daily Report</h1>
      </div>
      {
        <div className={styles.box}>
          <h1 className={styles.text2}>Date: </h1>
          <div className={styles.DateInput}>
            <Input floated="left" placeholder="" type="date" />
          </div>
          <h2 className={styles.text}>Progress:</h2>
          <Form>
            <TextArea placeholder="" />
          </Form>
          <h3 className={styles.text3}>Problem/s:</h3>
          <Form>
            <TextArea placeholder="" />
          </Form>
          <h4 className={styles.text3}>Learnings/Realizations: </h4>
          <Form>
            <TextArea placeholder="" />
          </Form>
          <h5 className={styles.text3}>Next Meeting's Plan:</h5>
          <Form>
            <TextArea placeholder="" />
          </Form>
          <div className={styles.ButtonSubmit}>
              <EditReportModal />
          </div>
        </div>
      }
    </div>
  );
};

export default EditDailyReport;
