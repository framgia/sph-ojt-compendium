import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import {
  Form,
  Grid,
  Header,
  Button,
  Container,
  Image,
} from 'semantic-ui-react';

import { Link } from 'react-router-dom';

const RegisterUI = () => {
  const [userName, setUserName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [school, setSchool] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [sex, setSex] = useState('');

  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate('/register-success');
    setSuccess(true);
  };

  return (
    <>
      {success ? (
        <section>sucess!</section>
      ) : (
        <section>
          <Grid centered stackable columns={2} padded>
            <Grid.Row>
              <Grid.Column width={8}>
                <Container fluid textAlign="center">
                  <Container>Have an Account?</Container>
                  <Link to="/login" className="item">
                    <Button>Login</Button>
                  </Link>
                  <Image src="/images/logo.png" centered></Image>
                </Container>
              </Grid.Column>

              <Grid.Column width={8}>
                <Header size="huge">Sign Up</Header>
                <Form unstackable onSubmit={handleSubmit}>
                  <Form.Input
                    fluid
                    required
                    label="Username"
                    placeholder="Username"
                    onChange={(e) => setUserName(e.target.value)}
                  />
                  <Form.Input
                    fluid
                    required
                    label="First name"
                    placeholder="First name"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <Form.Input
                    fluid
                    required
                    label="Middle name"
                    placeholder="Middle name"
                    onChange={(e) => setMiddleName(e.target.value)}
                  />
                  <Form.Input
                    fluid
                    required
                    label="Last name"
                    placeholder="Last name"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  <Form.Input
                    fluid
                    required
                    label="School"
                    placeholder="School"
                    type="text"
                    onChange={(e) => setSchool(e.target.value)}
                  />
                  <Form.Input
                    fluid
                    required
                    label="Email"
                    placeholder="example@example.com"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Form.Input
                    fluid
                    required
                    label="Password"
                    placeholder="Password"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {password.length < 6 ? (
                    <p>Password too short.</p>
                  ) : (
                    <p>Okay!</p>
                  )}
                  <Grid columns={2} relaxed="very">
                    <Grid.Column relaxed="very">
                      <Form.Input
                        fluid
                        required
                        label="Birthdate"
                        type="date"
                        onChange={(e) => setBirthdate(e.target.value)}
                      />
                    </Grid.Column>
                    <Grid.Column relaxed="very">
                      <Form.Input
                        fluid
                        required
                        label="Sex"
                        placeholder="Sex"
                        onChange={(e) => setSex(e.target.value)}
                      />
                    </Grid.Column>
                  </Grid>
                  <Button fluid>CREATE!</Button>
                </Form>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </section>
      )}
    </>
  );
};

export default RegisterUI;
