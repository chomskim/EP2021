import React, { useState, useEffect } from 'react'
import { useLocation, Routes, Route } from 'react-router-dom'

import Nav from './Nav'
import Admin from './Admin'
import Main from './Main'
import Profile from './Profile'

export default function App() {
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
        <Route path='/' element={<Main />} />
        <Route path='admin' element={<Admin />} />
        <Route path='profile' element={<Profile />} />
        <Route path='*' element={<Main />} />
      </Routes>
    </>
  )
}
