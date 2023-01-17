import React from 'react';
import { Link } from 'react-router-dom';
import Container from './Container';

const Error = () => {
  return (
    <Container>
      <h1>Error Page</h1>
      <Link to='/'>Back Home</Link>
    </Container>
  );
};

export default Error;
