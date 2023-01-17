# Ch06 Lambda Auth Build V2

### Use Authenticator in @aws-amplify/ui-react

<pre?>
npx create-react-app ch06-lambda-auth-v2
cd ch06-lambda-auth-v2
yarn add aws-amplify @aws-amplify/ui-react antd react-router-dom
yarn add uuid

amplify pull
? Select the authentication method you want to use: AWS profile
...
? Which app are you working on? d3gtr124uuzrgo
Backend environment 'dev' found. Initializing...
? Choose your default editor: Visual Studio Code
? Choose the type of app that you're building javascript
Please tell us about your project
? What javascript framework are you using react
? Source Directory Path: src
? Distribution Directory Path: build
? Build Command: npm run-script build
? Start Command: npm run-script start
? Do you plan on modifying this backend? Yes
✔ Successfully pulled backend environment dev from the cloud.
✅

✅ Successfully pulled backend environment dev from the cloud.

</pre>

### Edit backend/function/.../add-to-group.js

<pre>
/* eslint-disable-line */
const aws = require('aws-sdk')

exports.handler = async (event, context) => {
  const cognitoProvider = new aws.CognitoIdentityServiceProvider({
    apiVersion: '2016-04-18',
  })

  let isAdmin = false
  const adminEmails = ['admin@example.com']

  // if the user is one of the admins, set the isAdmin variable to true
  if (adminEmails.indexOf(event.request.userAttributes.email) !== -1) {
    isAdmin = true
  }

  const groupParams = {
    UserPoolId: event.userPoolId,
  }

  const userParams = {
    UserPoolId: event.userPoolId,
    Username: event.userName,
  }

  if (isAdmin) {
    groupParams.GroupName = 'Admin'
    userParams.GroupName = 'Admin'

    // first check to see if the groups exists, and if not create the group
    try {
      await cognitoProvider.getGroup(groupParams).promise()
    } catch (e) {
      await cognitoProvider.createGroup(groupParams).promise()
    }

    // the user is an administrator, place them in the Admin group
    try {
      await cognitoProvider.adminAddUserToGroup(userParams).promise()
      return {
        statusCode: 200,
        body: JSON.stringify(event),
      }
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify(error),
      }
    }
  } else {
    // if the user is in neither group, proceed with no action
    return {
      statusCode: 200,
      body: JSON.stringify(event),
    }
  }
}
</pre>

<pre>
yarn start

yarn build
</pre>

### Local Client

<pre>
npm install -g serve
serve -s build -l 4000
</pre>

### S3 Hosting

<pre>
cd build
aws s3 sync . s3://ch06-lambda-resize.com --profile dabit-fullstack
</pre>

</pre>
