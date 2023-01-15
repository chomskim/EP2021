# EP2021

Enterprise Programming (HUFS 2021)

## Install VirtaulBox

[VirtualBox](https://www.virtualbox.org)

Download and Install

## Ubuntu Install

[Ubuntu 20.04 Download](https://ubuntu.com/download/desktop)

Click Button Download and Download ISO File

## Build Ubuntu Virtual Machine

## Ubuntu Initial Set-up

```
sudo apt update
sudo apt upgrade
sudo apt autoremove

# 기본 SW
sudo apt install perl gcc make
# VirtualBox Guest Extension Package Insert 가능
sudo apt install curl g++ net-tools git

# File Process 수 늘리기
cat /proc/sys/fs/inotify/max_user_watches
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf
fs.inotify.max_user_watches=524288
sudo sysctl -p
fs.inotify.max_user_watches = 524288

# nmap install and 네트웍 검사
sudo apt-get install nmap
ifconfig
np0s3: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
       inet 172.30.1.41  netmask 255.255.255.0  broadcast 172.30.1.255
sudo nmap -n -sP 172.30.1.1/24

# VM과 Host 사이 File Share
sudo adduser $USER vboxsf
sudo usermod -a -G  vboxsf cskim

# Install VS Code
Download Visual Studio Code deb from https://code.visualstudio.com/docs/?dv=linux64_deb
double click code_1.47.0-1594283939_amd64.deb --> install screen

# Install Chrome
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
sudo apt install ./google-chrome-stable_current_amd64.deb

# Install Node
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
source ~/.bashrc
nvm list-remote
nvm install v12.22.4
nvm install v14.17.4

node --version
v14.17.4

npm --version
6.14.4

nvm alias default v12.22.4
nvm use default

node --version
v12.22.4

npm install -g yarn

```

## Git Clone

<pre>
자신의 root folder에서
<b>git clone https://github.com/chomskim/EP2021.git</b>
하면 EP2021 folder가 생긴다.
그 후에는 수시로 pull 하면 된다
</pre>

자신의 GitHub를 만들면

```
git config --global user.name <github-username>
git config --global user.email <github-email>
```

## VS Code Setting For React Dev

### Extension 설치

- Auto Rename Tag
- ES7 React/Redux/GraphQL/React-Native snippets
- indent-rainbow
- Prettier - Code formatter

### Setting

```
"emmet.includeLanguages": {
    "javascript": "javascriptreact"
  },
"editor.formatOnPaste": true,
"editor.formatOnSave": true,
"prettier.jsxSingleQuote": true,
"prettier.semi": true,
"prettier.singleQuote": true,
"[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
```

## Create React App

```
$ npx create-react-app hello-react
$ cd hello-react
$ npm start

$ npx create-react-app test-js
```

### Copy hello-react project to hello-react-copy

### Copy package.json, public, src

```
$ cd hello-react-copy
$ npm install
$ npm start
```

### Install AWS CLI

```
$ sudo apt install -y python3-pip
$ sudo apt install -y build-essential libssl-dev libffi-dev python3-dev
$ sudo apt install -y python3-venv
$ pip3 install awscli
```

### Configure AWS

```
$ aws configure
AWS Access Key ID [None]: ********************
AWS Secret Access Key [None]: ****************************************
Default region name [None]: ap-northeast-2
Default output format [None]:
```

### Installing and Configuring the Amplify CLI

```
npm install -g @aws-amplify/cli
```

## 서버리스 웹앱 개발 튜토링 사이트 URL

[serverless web app using AWS, react and AI](https://medium.com/develop-and-deploy-a-complex-serverless-web-app)
