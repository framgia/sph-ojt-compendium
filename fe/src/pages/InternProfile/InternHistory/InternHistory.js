import React from 'react';
import { Pagination } from 'semantic-ui-react';
import DisplayText from '../../userprofile/components/displaytext/DisplayText';
import Input from '../../userprofile/components/input/Input';
import Label from '../../userprofile/labels/Label';

import styles from './internHistory.module.css';

const InternHistory = (props) => {
  return (
    <div className={styles.history}>
      <div>
        <div className={styles.title}>
          <DisplayText text="Daily Reports History" />
        </div>
        <div className={styles.box}>
          <Label text="Date:" />
          <Input
            placeholder="Enter Date Here..."
            type="text"
            className={styles.date}
          />
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
    // <h1>Reports Section:</h1>
  );
};

export default InternHistory;
