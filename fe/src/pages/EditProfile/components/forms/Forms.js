import React from 'react';
import InputField from '../InputField/InputField';
import Label from '../../../userprofile/labels/Label';
import { Grid } from 'semantic-ui-react';
import styles from './Forms.module.css';
import BtnNavigate from '../../../userprofile/components/button/BtnNavigate';
import Dropdown from '../dropdown/Dropdown';
import { Link } from 'react-router-dom';

const Forms = (props) => {
  const sexOptions = [
    {
      value: 'male',
      label: 'Male',
    },
    {
      value: 'female',
      label: 'Female',
    },
  ];
  return (
    <div className={styles.formsContainer}>
      <div className={styles.forms}>
        <Label text="First Name" type="text" />
        <InputField placeholder="First Name" type="text" />
        <Label text="Middle Name" />
        <InputField placeholder="Middle Name" type="text" />
        <Label text="Last Name" />
        <InputField placeholder="Last Name" type="text" />
        <Label text="Email" />
        <InputField placeholder="Email" type="text" />
        <Label text="School" />
        <InputField placeholder="School" type="text" />
        <Grid columns={2} relaxed="very">
          <Grid.Column width={4}>
            <Label text="Birthdate" />
            <InputField type="date" />
          </Grid.Column>
          <Grid.Column width={4}>
            <Label text="Sex" />
            <div>
              <Dropdown options={sexOptions} defaultValue="Sex" />
            </div>
          </Grid.Column>
        </Grid>
        <div className={styles.saveBtn}>
          <Link to="/profile">
            <BtnNavigate btnText="Save Changes" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Forms;
