import React from 'react';
import { Button, Segment, Image, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const RegisterSuccess = () => {
  return (
    <Container>
      <Image src="/images/logo.png" size="large" centered />

      <Segment textAlign="center">
        <div className="ui icon header">
          <p>
            Congratulations! <br />
            You have successfully created an account!
          </p>
        </div>
      </Segment>
      <Link to="/login" className="item">
        <Button fluid>Login</Button>
      </Link>
    </Container>
  );
};

export default RegisterSuccess;
