import React, { useState, useEffect } from 'react'
import { Button } from 'antd'
import { Auth } from 'aws-amplify'
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import { useNavigate } from 'react-router-dom'
import Container from './Container'

function Profile() {
  const navigate = useNavigate()
  useEffect(() => {
    checkUser()
  }, [])
  const [user, setUser] = useState({})
  async function checkUser() {
    try {
      const data = await Auth.currentUserPoolUser()
      const userInfo = { username: data.username, ...data.attributes }
      setUser(userInfo)
    } catch (err) {
      console.log('error: ', err)
    }
  }
  function signOut() {
    Auth.signOut()
      .then((res) => {
        navigate('/')
      })
      .catch((err) => console.log('error signing out: ', err))
  }
  return (
    <Container>
      <h1>Profile</h1>
      <h2>Username: {user.username}</h2>
      <h3>Email: {user.email}</h3>
      {/* <h4>Phone: {user.phone_number}</h4> */}
      <Button onClick={signOut}>Sign Out</Button>
      {/* <AmplifySignOut /> */}
    </Container>
  )
}

export default withAuthenticator(Profile)
