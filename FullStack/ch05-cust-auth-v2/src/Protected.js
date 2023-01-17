import React from 'react'
// import { Auth } from 'aws-amplify';
// import { useNavigate } from 'react-router-dom';
import Container from './Container'
import protectedRoute from './protectedRoute'

function Protected() {
  return (
    <Container>
      <h1>Protected route</h1>
    </Container>
  )
}

export default protectedRoute(Protected)
