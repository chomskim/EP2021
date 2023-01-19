import React, { useState, useEffect } from 'react'
import { useLocation, Routes, Route } from 'react-router-dom'

import Home from './Home'
import Admin from './Admin'
import Nav from './Nav'
import Footer from './Footer'
import Container from './Container'
import Performance from './Performance'

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
      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='performance/:id' element={<Performance />} />
          <Route path='admin' element={<Admin />} />
          <Route path='*' element={<Home />} />
        </Routes>
      </Container>
      <Footer />
    </>
  )
}

export default App
