import React from "react";
import styles from "./CommentCreate.module.css";
import {
  Button,
  Form,
  TextArea,
  Icon,
  Input,
} from "semantic-ui-react";

export default function CreateReport() {
  return (
    <div className={styles.FlexBox}>
      <div className={styles.ButtonBack}>
        <Icon link name="arrow left" size="big" />
      </div>
      <div className={styles.primary}>
        <h1 className={styles.font}>Create a New Daily Report</h1>
      </div>
      {
        <div className={styles.box}>
          <h1 className={styles.text2}>Date: </h1>
          <div className={styles.DateInput}>
            <Input floated="left" placeholder="" />
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
            <Button floated="right" className={styles.ButtonFont}>
              Submit
            </Button>
          </div>
        </div>
      }
    </div>
  );
}
