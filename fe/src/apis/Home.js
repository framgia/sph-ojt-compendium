import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Image, Container } from 'semantic-ui-react';

const Home = () => {
  return (
    <Container>
      <Container>
        <Link to="/login" className="item">
          <Button floated="right">Login</Button>
        </Link>
        <Link to="/register" className="item">
          <Button floated="right">Register</Button>
        </Link>
      </Container>
      <Container>
        <Image src="/images/logo.png" centered />
      </Container>
    </Container>
  );
};

export default Home;
