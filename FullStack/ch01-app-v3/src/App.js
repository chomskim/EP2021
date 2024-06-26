import { Amplify, I18n } from 'aws-amplify'

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
import '@aws-amplify/ui-react/styles.css'
import awsconfig from './aws-exports'

I18n.putVocabularies(translations)
I18n.setLanguage('kr')

Amplify.configure(awsconfig)

const formFields = {
  signIn: {
    username: {
      placeholder: 'Enter your email',
    },
  },
  signUp: {
    // phone_number: {
    //   dialCode: '+82',
    // },
    password: {
      // label: 'Password:',
      placeholder: 'Enter your Password:',
      isRequired: false,
      // order: 1,
    },
    confirm_password: {
      // label: 'Confirm Password:',
      // order: 2,
    },
  },
  forceNewPassword: {
    password: {
      placeholder: 'Enter your Password:',
    },
  },
  resetPassword: {
    username: {
      placeholder: 'Enter your Username:',
    },
  },
  confirmResetPassword: {
    confirmation_code: {
      placeholder: 'Enter your Confirmation Code:',
      label: 'New Label',
      isRequired: false,
    },
    confirm_password: {
      placeholder: 'Enter your Password Please:',
    },
  },
  setupTOTP: {
    QR: {
      // totpIssuer: 'test issuer',
      // totpUsername: 'amplify_qr_test_user',
    },
    confirmation_code: {
      label: 'New Label',
      placeholder: 'Enter your Confirmation Code:',
      isRequired: false,
    },
  },
  confirmSignIn: {
    confirmation_code: {
      label: 'New Label',
      placeholder: 'Enter your Confirmation Code:',
      isRequired: false,
    },
  },
  confirmVerifyUser: {
    confirmation_code: {
      label: 'New Label',
      placeholder: 'Enter your Confirmation Code:',
      isRequired: false,
    },
  },
}

const components = {
  Header() {
    const { tokens } = useTheme()

    return (
      <View textAlign='center' padding={tokens.space.large}>
        <Image alt='Amplify logo' src='https://docs.amplify.aws/assets/logo-dark.svg' />
      </View>
    )
  },

  Footer() {
    const { tokens } = useTheme()

    return (
      <View textAlign='center' padding={tokens.space.large}>
        <Text color={tokens.colors.neutral[80]}>&copy; All Rights Reserved</Text>
      </View>
    )
  },

  SignIn: {
    Header() {
      const { tokens } = useTheme()

      return (
        <Heading padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`} level={3}>
          Sign in to your account
        </Heading>
      )
    },
    Footer() {
      const { toResetPassword } = useAuthenticator()

      return (
        <View textAlign='center'>
          <Button fontWeight='normal' onClick={toResetPassword} size='small' variation='link'>
            Reset Password
          </Button>
        </View>
      )
    },
  },

  SignUp: {
    Header() {
      const { tokens } = useTheme()

      return (
        <Heading padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`} level={3}>
          Create a new account
        </Heading>
      )
    },
    Footer() {
      const { toSignIn } = useAuthenticator()

      return (
        <View textAlign='center'>
          <Button fontWeight='normal' onClick={toSignIn} size='small' variation='link'>
            Back to Sign In
          </Button>
        </View>
      )
    },
  },
  ConfirmSignUp: {
    Header() {
      const { tokens } = useTheme()
      return (
        <Heading padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`} level={3}>
          Enter Information:
        </Heading>
      )
    },
    Footer() {
      return <Text>Footer Information</Text>
    },
  },
  SetupTOTP: {
    Header() {
      const { tokens } = useTheme()
      return (
        <Heading padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`} level={3}>
          Enter Information:
        </Heading>
      )
    },
    Footer() {
      return <Text>Footer Information</Text>
    },
  },
  ConfirmSignIn: {
    Header() {
      const { tokens } = useTheme()
      return (
        <Heading padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`} level={3}>
          Enter Information:
        </Heading>
      )
    },
    Footer() {
      return <Text>Footer Information</Text>
    },
  },
  ResetPassword: {
    Header() {
      const { tokens } = useTheme()
      return (
        <Heading padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`} level={3}>
          Enter Information:
        </Heading>
      )
    },
    Footer() {
      return <Text>Footer Information</Text>
    },
  },
  ConfirmResetPassword: {
    Header() {
      const { tokens } = useTheme()
      return (
        <Heading padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`} level={3}>
          Enter Information:
        </Heading>
      )
    },
    Footer() {
      return <Text>Footer Information</Text>
    },
  },
  VerifyUser: {
    Header() {
      const { tokens } = useTheme()
      return (
        <Heading padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`} level={3}>
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
        <Heading padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`} level={3}>
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
    <Authenticator formFields={formFields} components={components}>
      {(props) => {
        console.log(props)
        const { signOut, user } = props
        return (
          <main>
            <Card variation='elevated'>
              <h1>Hello {user.username}</h1>
            </Card>
            <Button variation='primary' onClick={signOut}>
              Sign out
            </Button>
          </main>
        )
      }}
    </Authenticator>
  )
}
