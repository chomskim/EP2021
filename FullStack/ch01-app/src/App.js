import React from 'react'
import Amplify from 'aws-amplify'
import {
  AmplifyAuthContainer,
  AmplifyAuthenticator,
  AmplifySignUp,
  AmplifySignIn,
  AmplifySignOut,
} from '@aws-amplify/ui-react'
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components'
import awsconfig from './aws-exports'

Amplify.configure(awsconfig)

function App() {
  const [authState, setAuthState] = React.useState()
  const [user, setUser] = React.useState()

  React.useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState)
      setUser(authData)
    })
  }, [])

  return authState === AuthState.SignedIn && user ? (
    <div>
      <h1>Hello , {user.username}</h1>
      <AmplifySignOut />
    </div>
  ) : (
    <AmplifyAuthContainer>
      <AmplifyAuthenticator usernameAlias='email'>
        <AmplifySignUp
          slot='sign-up'
          usernameAlias='email'
          formFields={[
            {
              type: 'email',
              label: 'Email',
              placeholder: 'Email',
              inputProps: { required: true, autocomplete: 'username' },
            },
            {
              type: 'password',
              label: 'Password',
              placeholder: 'Password',
              inputProps: { required: true, autocomplete: 'new-password' },
            },
            {
              type: 'phone_number',
              label: 'Phone Number',
              placeholder: '(555)555-5555',
            },
          ]}
        />
        <AmplifySignIn slot='sign-in' usernameAlias='email' />
      </AmplifyAuthenticator>
    </AmplifyAuthContainer>
  )
}
export default App
