import React, { useState, useRef, useEffect } from 'react';
import { Form, Grid, Header, Button, Container } from 'semantic-ui-react';
import _ from 'lodash';

const LoginUI = () => {
  // to get data entered
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Email: ', email);
    console.log('Password: ', password);

    setSuccess(true);
  };

  return (
    <>
      {success ? (
        <section>
          <h1>Home Page or Profile Page</h1>
          <p>{/* react router */}</p>
        </section>
      ) : (
        <section>
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
                    aria-describedby="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Form.Input
                    fluid
                    required
                    action="show"
                    label="Password"
                    placeholder="Password"
                    type="password"
                    aria-describedby="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Button>Login</Button>
                </Form>
              </Grid.Column>

              <Grid.Column width={8}>
                <Container textAlign="center">
                  <Container>Have an account?</Container>
                  <Button>Login</Button>
                </Container>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </section>
      )}
    </>
  );
};

export default LoginUI;
