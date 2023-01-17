import React, { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import {
  Authenticator,
  useTheme,
  Heading,
  Text,
  View,
  Image,
  useAuthenticator,
  Button,
  translations,
  Card,
} from '@aws-amplify/ui-react'

import Nav from './Nav'
import Home from './Home'
import Profile from './Profile'
import Protected from './Protected'
import Error from './Error'

import { Amplify, I18n } from 'aws-amplify'
import awsconfig from './aws-exports'

I18n.putVocabularies(translations)
I18n.setLanguage('kr')

Amplify.configure(awsconfig)

const App = () => {
  const { pathname } = useLocation()
  const [current, setCurrent] = useState(pathname)

  console.log('pathname=', pathname)
  useEffect(() => {
    setCurrent(pathname)
  }, [pathname])

  return (
    <>
      <Nav current={current} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='protected' element={<Protected />} />
        <Route path='profile' element={<Profile />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  )
}

export default App
