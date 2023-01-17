import React, { useEffect, useState } from 'react'
import { Auth } from 'aws-amplify'
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import { Storage } from 'aws-amplify'
import { v4 as uuid } from 'uuid'
import './App.css'

function App() {
  const [user, updateUser] = useState(null)
  const [images, setImages] = useState([])

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((user) => updateUser(user))
      .catch((err) => console.log(err))
  }, [])
  useEffect(() => {
    fetchImages()
  }, [])

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
    const files = await Storage.list('')
    console.log('fetchImages files=', files)
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

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Hello World</h1>
        {isAdmin && <p>Welcome, Admin</p>}
        <input type='file' onChange={onChange} />
        {images.map((image) => (
          <img src={image} key={image} style={{ width: 500 }} />
        ))}
      </header>
      <AmplifySignOut />
    </div>
  )
}

export default withAuthenticator(App)
