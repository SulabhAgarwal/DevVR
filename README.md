# DevVR

Have node.js installed 
Check -> node --version , npm --version

Next, we’ll need to download the React 360 CLI from npm:
$ npm install -g react-360-cli

Create a new project
Using the CLI, we can create a new project with the init command:
$ react-360 init DevVr

This’ll create a new directory named DevVR & start a project.

$ cd DevVr
$ npm run start

By running npm run start inside of this directory, we’re starting the Metro bundler and our application appears at http://localhost:8081/index.html


Phone Deploy :

install webvrpolyfill

$ npm install --save webvr-polyfill

$ npm run start

Get ip using netstat & see on phone.


