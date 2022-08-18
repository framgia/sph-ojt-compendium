import React from 'react';
import { Grid, Pagination } from 'semantic-ui-react';

import DisplayText from '../displaytext/DisplayText';
import Input from '../input/Input';
import styles from './reportsHistory.module.css';
import Label from '../../labels/Label';
import BtnNavigate from '../button/BtnNavigate';

const ReportsHistory = (props) => {
  return (
    <div className={styles.history}>
      <div>
        <div className={styles.title}>
          <DisplayText text="Daily Reports History" />
        </div>
        <div className={styles.btnNew}>
          <BtnNavigate btnText="Create New" />
        </div>
        <div className={styles.box}>
          <Grid columns={2} relaxed="very">
            <Grid.Column>
              <Label text="Date:" />
              <Input
                placeholder="Enter Date Here..."
                type="text"
                className={styles.date}
              />
            </Grid.Column>
            <Grid.Column>
              <div className={styles.boxBtn}>
                <Grid columns={2} relaxed="very">
                  <Grid.Column>
                    <BtnNavigate btnText="Update" />
                  </Grid.Column>
                  <Grid.Column>
                    <BtnNavigate btnText="Delete" />
                  </Grid.Column>
                </Grid>
              </div>
            </Grid.Column>
          </Grid>
          <Label text="Progress:" />
          <Input placeholder="Enter Progress Here..." type="text" />
          <Label text="Problem/s:" />
          <Input placeholder="Enter Problems Here..." type="text" />
          <Label text="Next Meeting's Plan:" />
          <Input placeholder="Enter Next Meeting Plans Here..." type="text" />
          <Label text="Learnings / Realizations:" />
          <Input placeholder="Enter Learnings Here..." type="text" />
        </div>
      </div>
      <div className={styles.pagination}>
        <Pagination defaultActivePage={5} totalPages={10} />
      </div>
    </div>
  );
};

export default ReportsHistory;
