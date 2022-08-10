import React, { useState, useRef, useEffect } from 'react';
import { Form, Grid, Header, Button, Icon, Container } from 'semantic-ui-react';
import { options, srcLogo } from '../actions/types';
import _ from 'lodash';

const RegisterUI = () => {
  // to get data entered
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [sex, setSex] = useState(''); //still cannot get data of dropdown (need more knowledge)

  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Firstname: ', firstName);
    console.log('Middlename: ', middleName);
    console.log('Lastname: ', lastName);
    console.log('Email: ', email);
    console.log('Password: ', password);
    console.log('Birthdate: ', birthdate);
    console.log('Sex: ', sex);

    setSuccess(true);
  };

  return (
    <>
      {success ? (
        <section>
          <h1>Success!</h1>
          <p>{/* react router */}</p>
        </section>
      ) : (
        <section>
          <Grid centered stackable columns={2} padded>
            <Grid.Row>
              <Grid.Column width={8}>
                <Container textAlign="center">
                  <Container>Have an account?</Container>
                  <Button>Login</Button>
                </Container>
              </Grid.Column>

              <Grid.Column width={8}>
                <Header size="huge">Sign Up</Header>
                <Form unstackable onSubmit={handleSubmit}>
                  <Form.Input
                    fluid
                    required
                    label="First name"
                    placeholder="First name"
                    aria-describedby="firstname"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <Form.Input
                    fluid
                    required
                    label="Middle name"
                    placeholder="Middle name"
                    aria-describedby="middletname"
                    onChange={(e) => setMiddleName(e.target.value)}
                  />
                  <Form.Input
                    fluid
                    required
                    label="Last name"
                    placeholder="Last name"
                    aria-describedby="lastname"
                    onChange={(e) => setLastName(e.target.value)}
                  />
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
                  <Grid columns={2} relaxed="very">
                    <Grid.Column relaxed="very">
                      <Form.Input
                        fluid
                        required
                        label="Birthdate"
                        type="date"
                        aria-describedby="birthdate"
                        onChange={(e) => setBirthdate(e.target.value)}
                      />
                    </Grid.Column>
                    <Grid.Column relaxed="very">
                      <Form.Select
                        fluid
                        required
                        label="Sex"
                        options={options}
                        placeholder="Sex"
                        aria-describedby="sex"
                        onChange={(e) => setSex(e.target.value)}
                      />
                    </Grid.Column>
                  </Grid>
                  <Button>CREATE!</Button>
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
