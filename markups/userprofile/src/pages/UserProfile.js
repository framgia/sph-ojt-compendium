import React from 'react';
import { Grid, Image   } from 'semantic-ui-react';
import NavBar from '../components/navbar/NavBar';
import ReportsHistory from '../components/reportshistory/ReportsHistory';
import UserInfo from '../components/userinfo/UserInfo';

const UserProfile = () => {
  return (
    // <div>
    //   <div className="row">
    //     <NavBar />
    //     <UserInfo />
    //     <ReportsHistory />
    //   </div>
    // </div>
    <Grid columns={3} divided>
      <Grid.Row>
        <Grid.Column>
          <Image src="/images/wireframe/media-paragraph.png" />
        </Grid.Column>
        <Grid.Column>
          <Image src="/images/wireframe/media-paragraph.png" />
        </Grid.Column>
        <Grid.Column>
          <Image src="/images/wireframe/media-paragraph.png" />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          <Image src="/images/wireframe/media-paragraph.png" />
        </Grid.Column>
        <Grid.Column>
          <Image src="/images/wireframe/media-paragraph.png" />
        </Grid.Column>
        <Grid.Column>
          <Image src="/images/wireframe/media-paragraph.png" />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default UserProfile;
