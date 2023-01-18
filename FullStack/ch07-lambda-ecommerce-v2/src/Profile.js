import React, { useState, useEffect } from 'react'
import { Button } from 'antd'
import { Auth, Hub } from 'aws-amplify'

import Container from './Container'
import AuthForm from './AuthForm'
import checkUser from './checkUser'

function Profile() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    checkUser(setUser)
    Hub.listen('auth', (data) => {
      const { payload } = data
      if (payload.event === 'signOut') {
        setUser(null)
      }
    })
  }, [])

  function signOut() {
    Auth.signOut().catch((err) => console.log('error signing out: ', err))
  }
  if (user) {
    // console.log('Profile user=', user)
    return (
      <Container>
        <h1>Profile</h1>
        <h2>Username: {user.username}</h2>
        <h3>Email: {user.email}</h3>
        <h4>isAdmin: {user.isAuthorized ? 'Yes' : 'No'}</h4>
        <Button onClick={signOut}>Sign Out</Button>
      </Container>
    )
  }
  return <AuthForm setUser={setUser} />
}

export default Profile
