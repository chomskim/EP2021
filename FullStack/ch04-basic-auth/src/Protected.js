import React, { useEffect } from 'react'
import { Auth } from 'aws-amplify'
import { useNavigate } from 'react-router-dom'
import Container from './Container'

function Protected() {
  const navigate = useNavigate()

  useEffect(() => {
    Auth.currentAuthenticatedUser().catch(() => {
      navigate('/profile')
    })
  }, [navigate])
  return (
    <Container>
      <h1>Protected route</h1>
    </Container>
  )
}

export default Protected
