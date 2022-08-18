import React, { useState } from 'react';
import axios from "axios";
import {
  Form,
  Grid,
  Header,
  Button,
  Container,
  Image,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const LoginUI = () => {

  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user) {
      console.log('invalid input')
    } else {
      const login = {
        email: user.email,
        password: user.password
      }
      axios
        .post("http://127.0.0.1:8000/token/login", { login })


        .then((res) => localStorage.setItem("token", res.data.token))
        .catch((err) => console.error(err));
    }

    setSuccess(true);

  };


  return (
    <>
      {success ? (
        <Container>
          <h1>Home Page or Profile Page</h1>
          <p>This is where the dashboard or homepage should go</p>
        </Container>
      ) : (
        <Container>
          <Grid centered stackable columns={2} padded>
            <Grid.Row>
              <Grid.Column width={8}>
                <Header size="huge">Log In</Header>
                <Form unstackable onSubmit={handleSubmit}>
                  <Form.Input
                    fluid
                    required
                    label="Email"
                    placeholder="example@example.com"
                    type="email"
                    onChange={(e) => setUser(e.target.value)}
                  />
                  <Form.Input
                    fluid
                    required
                    label="Password"
                    placeholder="Password"
                    type="password"
                    onChange={(e) => setUser(e.target.value)}
                  />

                  <Button type="submit">Login</Button>
                </Form>
              </Grid.Column>

              <Grid.Column width={8}>
                <Container textAlign="center">
                  <Container>Need an Account?</Container>
                  <Link to="/register">
                    <Button>Register</Button>
                  </Link>
                  <Image src="/images/logo.png" centered></Image>
                </Container>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      )}
    </>
  );
};

export default LoginUI;
