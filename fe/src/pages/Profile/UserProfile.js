import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./UserProfile.module.css";
import {
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
  Grid,
  Button,
  Pagination,
} from "semantic-ui-react";
import DeleteDailyReport from "../DailyReport/DeleteDailyReport";

export default function UserProfile() {
  const navigate = useNavigate();
  const navigateCreate = () => {
    navigate("/create");
  };
  return (
    /*Sidebar*/
    <div className={style.FlexBox}>
      <Grid>
        <Grid.Row>
          <Grid.Column width={3}>
            <div>
              <Sidebar.Pushable as={Segment} className={style.Sidebar}>
                <Sidebar
                  className={style.WholeScreen}
                  as={Menu}
                  animation="overlay"
                  vertical
                  visible
                >
                  <div>
                    <Image
                      className={style.Picture}
                      src="https://react.semantic-ui.com/images/wireframe/square-image.png"
                      size="small"
                      circular
                    />
                    <h1 className={style.NameFont}>NameIs Here</h1>
                    <div className={style.HomeStyle}>
                      <Menu.Item as="a">
                        <Icon name="home" size="large" />
                        Home
                      </Menu.Item>
                    </div>
                    <div className={style.OtherStyle}>
                      <Menu.Item as="a">
                        <Icon name="users" size="large" />
                        Interns
                      </Menu.Item>

                      <Menu.Item as="a">
                        <Icon name="book" size="large" />
                        Daily Reports
                      </Menu.Item>

                      <Menu.Item as="a">
                        <Icon name="user" size="large" />
                        Profile
                      </Menu.Item>

                      <div className={style.LogoutStyle}>
                        <Menu.Item as="a">
                          <Icon name="logout" size="large" />
                          Logout
                        </Menu.Item>
                      </div>
                    </div>
                  </div>
                </Sidebar>
              </Sidebar.Pushable>
            </div>
          </Grid.Column>
          <Grid.Column width={12}>
            <Grid.Row>
              <Button
                floated="right"
                content="Edit Profile"
                className={style.ButtonEditProfile}
              />
              <div className={style.ForceLeft}>
                <h1 className={style.InfoFontEmail}>Email: Input Email Here</h1>
                <h1 className={style.InfoFont}>Birthdate: Birthdate Here</h1>
                <h1 className={style.InfoFont}>Sex: Here</h1>
                <h1 className={style.InfoFont}>School: Input School Here</h1>
              </div>
            </Grid.Row>
            <Grid.Row>
              <div className={style.Flexbox}>
                <Button
                  className={style.buttonCreate}
                  onClick={navigateCreate}
                  floated="right"
                  content="Create"
                />
                <h1 className={style.ReportHistory}>Daily Report History</h1>
                <div className={style.dailyreport}>
                  <div className={style.buttonDelete}><DeleteDailyReport/></div> 
                  <h1 className={style.date}>Date:</h1>
                  <h1 className={style.content}>Input date Here</h1>
                  <h1 className={style.input}>Progress:</h1>
                  <h1 className={style.content}>Input Progress Here</h1>
                  <h1 className={style.input}>Problems:</h1>
                  <h1 className={style.content}>Input Problems Here</h1>
                  <h1 className={style.input}>Learnings/Realization:</h1>
                  <h1 className={style.content}>Input Learnings Here</h1>
                  <h1 className={style.input}>Next Meeting's Plan:</h1>
                  <h1 className={style.contents}>Input plans Here</h1>
                </div>
                <div className={style.Pagination}>
                  <Pagination defaultActivePage={5} totalPages={10} />
                </div>
              </div>
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
