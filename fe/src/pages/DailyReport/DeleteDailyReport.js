import React from "react";
import { Modal, Button, Image} from "semantic-ui-react";
import styles from '../Comments/Create/CommentCreate.module.css';

function DeleteDailyReport() {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
        onClose={() => setOpen(false)}
        onOpen = {() => setOpen(true)}
        open={open}
        trigger={
        <Button floated="center" 
        className={styles.ButtonFont}>
            Delete</Button>}>
        <Modal.Header>Delete Daily Report</Modal.Header>
        <Modal.Content image>
            <Image size ="small" src="/images/logo2.png" centered wrapped/>
        </Modal.Content>
        <Modal.Content>    
            <p className={styles.text4}>Are you sure you want to delete this daily report?</p>
        </Modal.Content>
        <Modal.Actions>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button onClick={() => setOpen(false)} negative>Delete</Button>
      </Modal.Actions>
    </Modal>
  );
}

export default DeleteDailyReport;