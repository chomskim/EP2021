# Ch01 Build

<pre>
$ npx create-react-app ch01-app
$ cd ch01-app
$ npm install aws-amplify @aws-amplify/ui-react

$ amplify init
Note: It is recommended to run this command from the root of your app directory
? Enter a name for the project <b>ch01app</b>
The following configuration will be applied:

Project information
| Name: ch01app
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
Adding backend environment dev to AWS Amplify Console app: d8uacjwf1f76x
⠧ Initializing project in the cloud...

✔ Successfully created initial AWS cloud resources for deployments.
✔ Initialized provider successfully.
Initialized your environment successfully.
...
Your project has been successfully initialized and connected to the cloud!

$ amplify add auth
Using service: Cognito, provided by: awscloudformation
 
 The current configured provider is Amazon Cognito. 
 
 Do you want to use the default authentication and security configuration? <b>Default configuration</b>
 Warning: you will not be able to edit these selections. 
 How do you want users to be able to sign in? Username
 Do you want to configure advanced settings? No, I am done.
Successfully added auth resource ch01appd56cca5b locally

$ amplify push
✔ Successfully pulled backend environment dev from the cloud.

    Current Environment: dev
    
┌──────────┬─────────────────┬───────────┬───────────────────┐
│ Category │ Resource name   │ Operation │ Provider plugin   │
├──────────┼─────────────────┼───────────┼───────────────────┤
│ Auth     │ ch01appd56cca5b │ Create    │ awscloudformation │
└──────────┴─────────────────┴───────────┴───────────────────┘
? Are you sure you want to continue? <b>Yes</b>
⠋ Updating resources in the cloud. This may take a few minutes...
...
✔ All resources are updated in the cloud

</pre>

### Rebuild

<pre>
$ amplify pull
? Select the authentication method you want to use: AWS profile

For more information on AWS Profiles, see:
https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html

? Please choose the profile you want to use dabit-fullstack
? Which app are you working on? d8uacjwf1f76x
Backend environment 'dev' found. Initializing...
? Choose your default editor: Visual Studio Code
? Choose the type of app that you're building javascript
Please tell us about your project
? What javascript framework are you using react
? Source Directory Path:  src
? Distribution Directory Path: build
? Build Command:  npm run-script build
? Start Command: npm run-script start
? Do you plan on modifying this backend? Yes
✔ Successfully pulled backend environment dev from the cloud.
✅ 

✅ Successfully pulled backend environment dev from the cloud.
Run 'amplify pull' to sync future upstream changes.
</pre>