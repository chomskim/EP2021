# Ch03 Build

<pre>
$ npx create-react-app ch03-noteapp-v2
$ cd ch03-noteapp
$ yarn add aws-amplify antd uuid

$ amplify init
Note: It is recommended to run this command from the root of your app directory
? Enter a name for the project <b>ch03noteappv2</b>
The following configuration will be applied:

Project information
| Name: ch03noteapp
| Environment: dev
| Default editor: Visual Studio Code
| App type: javascript
| Javascript framework: react
| Source Directory Path: src
| Distribution Directory Path: build
| Build Command: npm run-script build
| Start Command: npm run-script start

? Initialize the project with the above configuration? <b>Yes</b>
Using default provider  awscloudformation
? Select the authentication method you want to use: <b>AWS profile</b>

For more information on AWS Profiles, see:
https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html

? Please choose the profile you want to use <b>fullstack</b>
⠏ Initializing project in the cloud...
...
CREATE_COMPLETE amplify-ch03noteapp-dev-100349 AWS::CloudFormation::Stack Mon Nov 01 2021 10:04:23 GMT+0900 (Korean Standard Time) 
✔ Successfully created initial AWS cloud resources for deployments.
✔ Initialized provider successfully.
Initialized your environment successfully.

Your project has been successfully initialized and connected to the cloud!
...

$ amplify add api
? Please select from one of the below mentioned services: <b>GraphQL</b>
? Provide API name: <b>ch03noteappv2</b>
? Choose the default authorization type for the API <b>API key</b>
? Enter a description for the API key: <b>public</b>
? After how many days from now the API key should expire (1-365): <b>365</b>
? Do you want to configure advanced settings for the GraphQL API <b>No, I am done.</b>
? Do you have an annotated GraphQL schema? <b>No</b>
? Choose a schema template: <b>Single object with fields (e.g., “Todo” with ID, name, description)</b>

The following types do not have '@auth' enabled. Consider using @auth with @model
         - Todo
Learn more about @auth here: https://docs.amplify.aws/cli/graphql-transformer/auth

App not deployed yet.

GraphQL schema compiled successfully.

Edit your schema at /home/cskim/git-repo/EP2021/FullStack/ch03-noteapp/amplify/backend/api/notesapi/schema.graphql 
or place .graphql files in a directory at /home/cskim/git-repo/EP2021/FullStack/ch03-noteapp/amplify/backend/api/notesapi/schema
? Do you want to edit the schema now? <b>Yes</b>
? Choose your default editor: <b>Visual Studio Code</b>
Edit the file in your editor: <b>/home/cskim/git-repo/EP2021/FullStack/ch03-noteapp/amplify/backend/api/notesapi/schema.graphql

type Note @model @auth(rules: [{ allow: public }]) {
  id: ID!
  clientId: ID
  name: String!
  description: String
  completed: Boolean
}

</b>
Successfully added resource notesapi locally
...

$ amplify push
✔ Successfully pulled backend environment dev from the cloud.

    Current Environment: dev
    
┌──────────┬───────────────┬───────────┬───────────────────┐
│ Category │ Resource name │ Operation │ Provider plugin   │
├──────────┼───────────────┼───────────┼───────────────────┤
│ Api      │ notesapi      │ Create    │ awscloudformation │
└──────────┴───────────────┴───────────┴───────────────────┘
? Are you sure you want to continue? <b>Yes</b>

The following types do not have '@auth' enabled. Consider using @auth with @model
         - Note
Learn more about @auth here: https://docs.amplify.aws/cli/graphql-transformer/auth

App not deployed yet.
App not deployed yet.

GraphQL schema compiled successfully.

Edit your schema at /home/cskim/git-repo/EP2021/FullStack/ch03-noteapp/amplify/backend/api/notesapi/schema.graphql or 
place .graphql files in a directory at /home/cskim/git-repo/EP2021/FullStack/ch03-noteapp/amplify/backend/api/notesapi/schema
? Do you want to generate code for your newly created GraphQL API <b>Yes</b>
? Choose the code generation language target <b>javascript</b>
? Enter the file name pattern of graphql queries, mutations and subscriptions <b>src/graphql/**/*.js</b>
? Do you want to generate/update all possible GraphQL operations - queries, mutations and subscriptions <b>Yes</b>
? Enter maximum statement depth [increase from default if your schema is deeply nested] <b>2</b>
⠋ Updating resources in the cloud. This may take a few minutes...App not deployed yet.
⠏ Updating resources in the cloud. This may take a few minutes...
...
UPDATE_COMPLETE amplify-ch03noteapp-dev-100349 AWS::CloudFormation::Stack Mon Nov 01 2021 10:16:04 GMT+0900 (Korean Standard Time) 
✔ Generated GraphQL operations successfully and saved at src/graphql
✔ All resources are updated in the cloud

GraphQL endpoint: https://g67jiik74jh53nrputpir4gegq.appsync-api.ap-northeast-2.amazonaws.com/graphql
GraphQL API KEY: da2-kim3dw4dlvbe5a5wkawaw2ax2q

</pre>

<pre>
mutation createNote {
  createNote(input: {
    name: "Book flight"
    description: "Flying to Paris on June 1 returning June 10"
    completed: false
  }) {
    id name description completed
  }
}

query listNotes {
  listNotes {
    items {
      id
      name
      description
      completed
    }
  }
}

</pre>
