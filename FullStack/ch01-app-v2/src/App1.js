import { Amplify } from 'aws-amplify'

import { Authenticator, useTheme, Heading, Text } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'

import awsconfig from './aws-exports'
Amplify.configure(awsconfig)

const formFields = {
  confirmVerifyUser: {
    confirmation_code: {
      label: 'New Label',
      placeholder: 'Enter your Confirmation Code:',
      isRequired: false,
    },
  },
}

const components = {
  VerifyUser: {
    Header() {
      const { tokens } = useTheme()
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      )
    },
    Footer() {
      return <Text>Footer Information</Text>
    },
  },

  ConfirmVerifyUser: {
    Header() {
      const { tokens } = useTheme()
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      )
    },
    Footer() {
      return <Text>Footer Information</Text>
    },
  },
}

export default function App() {
  return (
    <Authenticator
      formFields={formFields}
      components={components}
      hideSignUp={true}
    >
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  )
}
