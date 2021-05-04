# default-solidity-react-project
Default startingpoint for solidity react projects

##Getting started

###Install dependencies for truffle project
Starting in the project directory, run
npm install

###Make react client
The react app will be located in the client directory of the truffle project
npx create-react-app client

###Install dependencies for react app
cd client
npm install

##Develop contract
Create contract (.sol files) in contract directory

###Write tests for contract
Make new .js files in test directory

###Run tests
truffle test

###Run app
From project root run
truffle develop

From client directory run
npm start

