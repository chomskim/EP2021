# Ch09 Build

```
$ npx create-react-app ch09-message

$ yarn add @aws-amplify/core @aws-amplify/datastore antd react-color

$ amplify init

$ amplify add api

? Please select from one of the below mentioned services: GraphQL
? Provide API name: ch09message
? Choose the default authorization type for the API API key
? Enter a description for the API key: public
? After how many days from now the API key should expire (1-365): 365
? Do you want to configure advanced settings for the GraphQL API Yes, I want to make some addition
al changes.
? Configure additional auth types? No
? Enable conflict detection? Yes
? Select the default resolution strategy Auto Merge
? Do you have an annotated GraphQL schema? No
? Choose a schema template: Single object with fields (e.g., “Todo” with ID, name, description)

Edit your schema at /home/cskim/git-repo/EP2021/FullStack/ch09-message/amplify/backend/api/ch09message/schema.graphql or place .graphql files in a directory at /home/cskim/git-repo/EP2021/FullStack/ch09-message/amplify/backend/api/ch09message/schema
? Do you want to edit the schema now? Yes
? Choose your default editor: Visual Studio Code
Edit the file in your editor: /home/cskim/git-repo/EP2021/FullStack/ch09-message/amplify/backend/api/ch09message/schema.graphql
[Edit]
type Message @model {
  id: ID!
  title: String!
  color: String
  image: String
  createdAt: String
}
[Save]

Successfully added resource ch09message locally

$ amplify push --y

```

## Get API Key

- AWS AppSync --> Ch09message-dev --> Settings
- Default authorization mode --> API key
- Configuration --> API keys --> [New] da2-d2mkvz2s3..............
