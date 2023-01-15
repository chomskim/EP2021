# Ch01 Build

<pre>
$ npx create-react-app ch01-app-v2
$ cd ch01-app-v2
$ npm install aws-amplify @aws-amplify/ui-react

$ amplify init
Note: It is recommended to run this command from the root of your app directory
? Enter a name for the project <b>ch01app</b>
The following configuration will be applied:

Project information
| Name: ch01appv2
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
...
Your project has been successfully initialized and connected to the cloud!

[copy ch01-app/src/aws-exports.js to ch01-app-v2/src/]

yarn start
</pre>
