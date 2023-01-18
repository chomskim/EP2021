/* eslint-disable-line */
const aws = require('aws-sdk')

const cognitoProvider = new aws.CognitoIdentityServiceProvider({
  apiVersion: '2016-04-18',
})

/**
 * @type {import('@types/aws-lambda').PostConfirmationTriggerHandler}
 */
exports.handler = async (event) => {
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
