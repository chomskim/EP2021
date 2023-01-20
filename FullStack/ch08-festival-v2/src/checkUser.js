import { Auth } from 'aws-amplify'

async function checkUser(setUser) {
  let userData
  try {
    userData = await Auth.currentSession()
    console.log('userData: ', userData)
  } catch (err) {
    console.log('error: ', err)
  }

  if (!userData) {
    setUser({})
    return
  }
  const {
    idToken: { payload },
  } = userData
  const isAuthorized =
    payload['cognito:groups'] && payload['cognito:groups'].includes('Admin')
  setUser({
    username: payload['cognito:username'],
    email: payload['email'],
    isAuthorized,
  })
  console.log('user payload =', payload)
}

export default checkUser
