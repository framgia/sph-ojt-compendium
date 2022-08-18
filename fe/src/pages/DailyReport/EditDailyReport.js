import React from "react";
import { Modal, Button, Image} from "semantic-ui-react";
import styles from '../Comments/Create/CommentCreate.module.css';

function EditDailyReport() {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
        onClose={() => setOpen(false)}
        onOpen = {() => setOpen(true)}
        open={open}
        trigger={
        <Button floated="center" 
        className={styles.ButtonFont}>
            Edit</Button>}>
        <Modal.Header>Edit Daily Report</Modal.Header>
        <Modal.Content image>
            <Image size ="medium" src="/images/logo2.png" centered wrapped/>
        </Modal.Content>
        <Modal.Content>    
            <p className={styles.text4}>Do you want to keep these changes?</p>
        </Modal.Content>
        <Modal.Actions>
            <Button onClick={() => setOpen(false)}>Discard</Button>
            <Button onClick={() => setOpen(false)} positive>Save</Button>
      </Modal.Actions>
    </Modal>
  );
}

export default EditDailyReport;