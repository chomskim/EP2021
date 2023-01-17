# Build Fullstack Ch07

```sh
$ npx create-react-app ch07-lambda-ecommerce
$ cd ch07-lambda-ecommerce
$ yarn add aws-amplify @aws-amplify/ui-react react-router-dom antd


```

<pre>
$ amplify init
? Select the authentication method you want to use: <b>AWS profile</b>
? Please choose the profile you want to use <b>fullstack</b>
Your project has been successfully initialized and connected to the cloud!

$ amplify add auth
 Do you want to use the default authentication and security configuration? <b>Default configuration</b>
 Warning: you will not be able to edit these selections. 
 How do you want users to be able to sign in? <b>Username</b>
 Do you want to configure advanced settings? <b>Yes, I want to make some additional changes.</b>
 Warning: you will not be able to edit these selections. 
 What attributes are required for signing up? (Press &lt;space> to select, &lt;a> to toggle all, &lt;i> to invert selection)
 Do you want to enable any of the following capabilities? Add User to Group
? Enter the name of the group to which users will be added. Admin
Successfully added resource ch07lambdaecommerce2b4fc845PostConfirmation locally.

Next steps:
Check out sample function code generated in .../amplify/backend/function/ch07lambdaecommerce2b4fc845PostConfirmation/src
Successfully added the Lambda function locally
? Do you want to edit your add-to-group function now? <b>Yes</b>
? Choose your default editor: <b>Visual Studio Code</b>
Edit the file in your editor: .../amplify/backend/function/ch07lambdaecommerce2b4fc845PostConfirmation/src/add-to-group.js
? Press enter to continue 
Successfully added auth resource ch07lambdaecommerce2b4fc845 locally

$ amplify add storage
? Please select from one of the below mentioned services: <b>NoSQL Database</b>

Welcome to the NoSQL DynamoDB database wizard
This wizard asks you a series of questions to help determine how to set up your NoSQL database table.

? Please provide a friendly name for your resource that will be used to label this category in the project: <b>ch07product</b>
? Please provide table name: <b>ch07product</b>

You can now add columns to the table.

? What would you like to name this column: <b>id</b>
? Please choose the data type: <b>string</b>
? Would you like to add another column? <b>No</b>

? Please choose partition key for the table: <b>id</b>
? Do you want to add a sort key to your table? <b>No</b>

? Do you want to add global secondary indexes to your table? <b>No</b>
? Do you want to add a Lambda Trigger for your Table? <b>No</b>
✅ Successfully added resource ch07product locally


$ amplify add api
? Please select from one of the below mentioned services: <b>REST</b>
? Provide a friendly name for your resource to be used as a label for this category in the project: <b>ch07ecommerceapi</b>
? Provide a path (e.g., /book/{isbn}): <b>/products</b>
? Choose a Lambda source <b>Create a new Lambda function</b>
? Provide an AWS Lambda function name: <b>ch07ecommercefunction</b>
? Choose the runtime that you want to use: <b>NodeJS</b>
? Choose the function template that you want to use: <b>Serverless ExpressJS function (Integration with API Gateway)</b>

Available advanced settings:
- Resource access permissions
- Scheduled recurring invocation
- Lambda layers configuration
- Environment variables configuration
- Secret values configuration

? Do you want to configure advanced settings? <b>Yes</b>
? Do you want to access other resources in this project from your Lambda function? <b>Yes</b>
? Select the categories you want this function to have access to. <b>auth, storage</b>
? Select the operations you want to permit on ch07lambdaecommerce2b4fc845 <b>create, read, update, delete</b>
? Select the operations you want to permit on ch07product <b>create, read, update, delete</b>

You can access the following resource attributes as environment variables from your Lambda function
        AUTH_CH07LAMBDAECOMMERCE2B4FC845_USERPOOLID
        ENV
        REGION
        STORAGE_CH07PRODUCT_ARN
        STORAGE_CH07PRODUCT_NAME
        STORAGE_CH07PRODUCT_STREAMARN
? Do you want to invoke this function on a recurring schedule? <b>No</b>
? Do you want to enable Lambda layers for this function? <b>No</b>
? Do you want to configure environment variables for this function? <b>No</b>
? Do you want to configure secret values this function can access? <b>No</b>
? Do you want to edit the local lambda function now? <b>No</b>
Successfully added resource ch07ecommercefunction locally.
Succesfully added the Lambda function locally
? Restrict API access <b>Yes</b>
? Who should have access? <b>Authenticated and Guest users</b>
? What kind of access do you want for Authenticated users? <b>create, read, update, delete</b>
? What kind of access do you want for Guest users? <b>read</b>
? Do you want to add another path? <b>No</b>
Successfully added resource ch07ecommerceapi locally

</pre>

### Update .../amplify/backend/function/ch07ecommercefunction/src/app.js

<pre>
$ amplify push

Add User

aws cognito-idp sign-up --profile fullstack \
  --region ap-northeast-2 \
  --client-id 17kb2mrgo66n1p03ebmuv75mlj \
  --username admin \
  --password Passw0rd! \
  --user-attributes Name="email",Value="admin@example.com"

aws cognito-idp admin-confirm-sign-up --profile fullstack \
  --region ap-northeast-2 \
  --user-pool-id ap-northeast-2_HxxWSKXPM \
  --username admin
</pre>

## Creating Frontend

<pre>
Admin.js

Container.js

Main.js

Nav.js

Profile.js

Router.js

checkUser.js

</pre>
