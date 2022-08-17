import React from "react";
import styling from "./ListDailyReport.module.css";
import { useNavigate } from "react-router-dom";
import {
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
  Grid,
  List,
  Pagination,
} from "semantic-ui-react";
export default function ListDailyReport() {
  const navigate = useNavigate();
  const navigateprofile = () => {
    navigate("/profile");
  };
  return (
    <div className={styling.FlexBox}>
      <Grid>
        <Grid.Row>
          <Grid.Column width={3}>
            <div>
              <Sidebar.Pushable as={Segment} className={styling.Sidebar}>
                <Sidebar
                  className={styling.WholeScreen}
                  as={Menu}
                  animation="overlay"
                  vertical
                  visible
                >
                  <div>
                    <Image
                      className={styling.Picture}
                      src="https://react.semantic-ui.com/images/wireframe/square-image.png"
                      size="small"
                      circular
                    />
                    <h1 className={styling.NameFont}>NameIs Here</h1>
                    <div className={styling.HomeStyle}>
                      <Menu.Item as="a">
                        <Icon name="home" size="large" />
                        Home
                      </Menu.Item>
                    </div>
                    <div className={styling.OtherStyle}>
                      <Menu.Item as="a">
                        <Icon name="users" size="large" />
                        Interns
                      </Menu.Item>

                      <Menu.Item as="a">
                        <Icon name="book" size="large" />
                        Daily Reports
                      </Menu.Item>

                      <Menu.Item onClick={navigateprofile}>
                        <Icon name="user" size="large" />
                        Profile
                      </Menu.Item>

                      <div className={styling.LogoutStyle}>
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
            <Grid.Row className={styling.boxtrial}>
              <h1 className={styling.dailyreportstyle}>Daily Reports</h1>
              <List divided relaxed>
                <List.Item>
                  <List.Content>
                    <List.Header className={styling.ButtonReports} href="#">
                      Update Date here:
                    </List.Header>
                  </List.Content>
                </List.Item>

                <List.Item>
                  <List.Content>
                    <List.Header className={styling.ButtonReports} href="#">
                      Update Date here:
                    </List.Header>
                  </List.Content>
                </List.Item>

                <List.Item>
                  <List.Content>
                    <List.Header className={styling.ButtonReports} href="#">
                      Update Date here:
                    </List.Header>
                  </List.Content>
                </List.Item>

                <List.Item>
                  <List.Content>
                    <List.Header className={styling.ButtonReports} href="#">
                      Update Date here:
                    </List.Header>
                  </List.Content>
                </List.Item>

                <List.Item>
                  <List.Content>
                    <List.Header className={styling.ButtonReports} href="#">
                      Update Date here:
                    </List.Header>
                  </List.Content>
                </List.Item>
              </List>
              <div className={styling.paginationstyle}>
                <Pagination defaultActivePage={5} totalPages={10} />
              </div>
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
