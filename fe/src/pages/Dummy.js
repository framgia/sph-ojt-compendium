import React from 'react';
import { Container } from 'semantic-ui-react';
import DeleteDailyReport from "./DailyReport/DeleteDailyReport";
import EditDailyReport from "./DailyReport/EditDailyReport";

const Dummy = () => {
  return (
    <Container>
      <Container>
        <div>
            <EditDailyReport />
        </div>
        <div>
            <DeleteDailyReport />
        </div>
      </Container>
    </Container>
  );
};

export default Dummy;