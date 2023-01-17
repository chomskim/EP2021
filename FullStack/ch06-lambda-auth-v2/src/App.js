import React, { useEffect, useState } from 'react'
import { Button } from 'antd'
import { Auth, Hub } from 'aws-amplify'

import { Storage } from 'aws-amplify'
import { v4 as uuid } from 'uuid'

import './App.css'
import AuthForm from './AuthForm'

function App() {
  const [user, setUser] = useState(null)
  const [images, setImages] = useState([])

  useEffect(() => {
    async function checkUser() {
      try {
        const data = await Auth.currentUserPoolUser()
        console.log('auth data=', data)
        const userInfo = { username: data.username, ...data.attributes }
        setUser(userInfo)
      } catch (err) {
        console.log('error: ', err)
      }
    }
    checkUser()
    Hub.listen('auth', (data) => {
      const { payload } = data
      if (payload.event === 'signOut') {
        setUser(null)
      }
    })
  }, [])

  useEffect(() => {
    fetchImages()
  }, [])

  async function onChange(e) {
    /* When a file is uploaded, create a unique name and save it using the Storage API */
    const file = e.target.files[0]
    const filetype = file.name.split('.')[file.name.split.length - 1]
    await Storage.put(`${uuid()}.${filetype}`, file)
    /* Once the file is uploaded, fetch the list of images */
    fetchImages()
  }
  async function fetchImages() {
    /* This function fetches the list of image keys from your S3 bucket */
    const res = await Storage.list('')
    console.log('fetchImages res=', res)
    const files = res.results
    /* Once we have the image keys, the images must be signed in order for them to be displayed */
    const signedFiles = await Promise.all(
      files.map(async (file) => {
        /* To sign the images, we map over the image key array and get a signed url for each image */
        const signedFile = await Storage.get(file.key)
        return signedFile
      })
    )
    console.log('fetchImages signedFiles=', signedFiles)
    setImages(signedFiles)
  }

  function signOut() {
    Auth.signOut().catch((err) => console.log('error signing out: ', err))
  }

  // Check Group is Admin
  let isAdmin = false
  if (user) {
    const {
      signInUserSession: {
        idToken: { payload },
      },
    } = user
    console.log('payload: ', payload)
    if (
      payload['cognito:groups'] &&
      payload['cognito:groups'].includes('Admin')
    ) {
      isAdmin = true
    }
  }

  if (user) {
    return (
      <div className='App'>
        <header className='App-header'>
          {isAdmin && <p>Welcome, Admin</p>}
          <input type='file' onChange={onChange} />
          {images.map((image) => (
            <img src={image} key={image} style={{ width: 500 }} />
          ))}
        </header>
        <Button onClick={signOut}>Sign Out</Button>
      </div>
    )
  } else {
    return <AuthForm setUser={setUser} />
  }
}

export default App
