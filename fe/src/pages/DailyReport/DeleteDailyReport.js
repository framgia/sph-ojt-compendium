import React from "react";
import { Modal, Button } from "semantic-ui-react";
import styles from '../Comments/Create/CommentCreate.module.css';

function DeleteDailyReport() {
  return (
    <Modal
      trigger={<Button floated="center" className={styles.ButtonFont}>Delete</Button>}
      header="Delete Daily Report"
      content="Are you sure you want to delete this report?"
      actions={["Cancel", { key: "delete", content: "Delete", negative: true }]}
    />
  );
}

export default DeleteDailyReport;