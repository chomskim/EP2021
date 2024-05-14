# Ch01 Build V3

<pre>
$ cp ch01-app-v2/src(public,...) ch01-app-v3
$ cd ch01-app-v3
$ npm install 

$ amplify init
Note: It is recommended to run this command from the root of your app directory
? Enter a name for the project <b>ch01appv3</b>
The following configuration will be applied:

Project information
| Name: ch01appv3
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
? Please choose the profile you want to use csk-amplify
Adding backend environment dev to AWS Amplify app: d1qn6r6ub169it
...
Your project has been successfully initialized and connected to the cloud!
...

$ amplify add auth

$ amplify push

$ npm -D i @babel/plugin-proposal-private-property-in-object

$ npm start
</pre>
