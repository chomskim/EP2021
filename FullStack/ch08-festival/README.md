# Build Ch08 Festival App (AppSync)

<pre>
$ npx create-react-app ch08-festival
$ cd ch08-festival
$ yarn add aws-amplify antd @aws-amplify/ui-react@1.2.25 react-router-dom
</pre>

## Build Backend

<pre>
$ amplify init
$ amplify add auth
 Do you want to use the default authentication and security configuration? <b>Default configuration</b>
 How do you want users to be able to sign in? <b>Username</b>
 Do you want to configure advanced settings? <b>Yes, I want to make some additional changes.</b>
 What attributes are required for signing up? <b>Email</b>
 Do you want to enable any of the following capabilities? <b>Add User to Group</b>
? Enter the name of the group to which users will be added. <b>Admin</b>
Successfully added resource ch08festival2c9eab4fPostConfirmation locally.
? Do you want to edit your add-to-group function now? <b>Yes</b>
? Choose your default editor: <b>Visual Studio Code</b>
Edit the file in your editor: /home/cskim/git-repo/EP2021/FullStack/ch08-festival/amplify/backend/function/ch08festival2c9eab4fPostConfirmation/src/add-to-group.js
? Press enter to continue 
Successfully added auth resource ch08festival2c9eab4f locally

$ amplify add api
? Please select from one of the below mentioned services: <b>GraphQL</b>
? Provide API name: <b>ch08festivalapi</b>
? Choose the default authorization type for the API <b>Amazon Cognito User Pool</b>
Use a Cognito user pool configured as a part of this project.
? Do you want to configure advanced settings for the GraphQL API <b>Yes, I want to make some additional changes.</b>
? Configure additional auth types? <b>Yes</b>
? Choose the additional authorization types you want to configure for the API <b>API key</b>
API key configuration
? Enter a description for the API key: <b>public</b>
? After how many days from now the API key should expire (1-365): <b>365</b>
? Enable conflict detection? <b>No</b>
? Do you have an annotated GraphQL schema? <b>No</b>
? Choose a schema template: Single object with fields (e.g., “Todo” with ID, name, description)

? Do you want to edit the schema now? <b>Yes</b>
? Choose your default editor: <b>Visual Studio Code</b>
Edit the file in your editor: /home/cskim/git-repo/EP2021/FullStack/ch08-festival/amplify/backend/api/ch08festivalapi/schema.graphql
Successfully added resource ch08festivalapi locally

$ amplify push
✔ Successfully pulled backend environment dev from the cloud.

    Current Environment: dev
    
┌──────────┬──────────────────────────────────────┬───────────┬───────────────────┐
│ Category │ Resource name                        │ Operation │ Provider plugin   │
├──────────┼──────────────────────────────────────┼───────────┼───────────────────┤
│ Function │ ch08festival2c9eab4fPostConfirmation │ Create    │ awscloudformation │
├──────────┼──────────────────────────────────────┼───────────┼───────────────────┤
│ Auth     │ ch08festival2c9eab4f                 │ Create    │ awscloudformation │
├──────────┼──────────────────────────────────────┼───────────┼───────────────────┤
│ Api      │ ch08festivalapi                      │ Create    │ awscloudformation │
└──────────┴──────────────────────────────────────┴───────────┴───────────────────┘
? Are you sure you want to continue? <b>Yes</b>

The following types do not have '@auth' enabled. Consider using @auth with @model
         - Stage
         - Performance
Learn more about @auth here: https://docs.amplify.aws/cli/graphql-transformer/auth


GraphQL schema compiled successfully.

? Do you want to generate code for your newly created GraphQL API <b>Yes</b>
? Choose the code generation language target <b>javascript</b>
? Enter the file name pattern of graphql queries, mutations and subscriptions <b>src/graphql/**/*.j
s</b>
? Do you want to generate/update all possible GraphQL operations - queries, mutations and subscr
iptions <b>Yes</b>
? Enter maximum statement depth [increase from default if your schema is deeply nested] <b>2</b>

✔ All resources are updated in the cloud

GraphQL endpoint: https://sprbnq7r4ndijm2tvkulecjpmy.appsync-api.ap-northeast-2.amazonaws.com/graphql
GraphQL API KEY: da2-e37byjij2jbp3dvrqicindpugq

Add User

aws cognito-idp sign-up --profile fullstack \
  --region ap-northeast-2 \
  --client-id 5estf0cij1erhkdrmm1t7pn9m8 \
  --username admin \
  --password Passw0rd! \
  --user-attributes Name="email",Value="admin@example.com"

aws cognito-idp admin-confirm-sign-up --profile fullstack \
  --region ap-northeast-2 \
  --user-pool-id ap-northeast-2_PlP2lmYVV \
  --username admin
</pre>

graphql folder

## Build Frontend

Add new Component

- Container.js
- Footer.js
- Nav.js
- Admin.js
- Router.js
- Performance.js
- Home.js

Edit App.js using new react-router-dom

```


$ yarn add @aws-amplify/ui-react@1.2.25
$ yarn start

```

## On AWS AppSync Console --> APIs(Ch08...) --> Queries

<pre>
mutation MyMutation {
  createStage(input: {
    id: "stage-1"
    name: "Stage 1"
  }) {
    id name
  }
}

mutation MyMutation {
  createPerformance(input: {
    performanceStageId: "stage-1"
    performer: "Dreek"
    description: "Dreek LIVE in NYC! Don't miss out, performing all of the hits with a few surprise performances!"
    time: "Monday, May 4 2022"
  }) {
    id performer description
  }
}

mutation MyMutation {
  createPerformance(input: {
    performanceStageId: "stage-1"
    performer: "BTS"
    description: "BTS LIVE in NYC! Don't miss out, performing all of the hits with a few surprise performances!"
    time: "Monday, Jan 23 2023"
  }) {
    id performer description
  }
}
===
{
  "data": {
    "createPerformance": {
      "id": "d20e9874-61df-4f48-b274-dc1068a8d662",
      "performer": "BTS",
      "description": "BTS LIVE in NYC! Don't miss out, performing all of the hits with a few surprise performances!"
    }
  }
}
</pre>
