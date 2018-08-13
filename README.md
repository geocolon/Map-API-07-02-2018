# WebSocket messenger
I created this project to understand how to use socket.io, I wanted to create an instant messenger app. I made this app with a React and Redux frontend and programmed a node MongoDB server with passport authentication. 

Please go to the deployed version here =>. <a href="https://new-socket-messegner.herokuapp.com/">WebSocket</a>

### Installing

If you are cloning this repo and wanted to locally host both the client and the server, please open terminal window then ```cd``` to where you cloned this project. 

### Server

* Next cd into the server folder. Then type ```npm install``` to install to download the dependencies. 
* Next, create 3 terminal windows and type 3 different commands in each new window. 
* In the 1st window please write ```mongod```, hit return and you should see MongoDB running in your terminal now. 
* 2nd window writes the word ```mongo``` then hit return. The same result as before should show up as the mongo database starts up. 

### Client

* In your terminal ```cd``` into the client folder, then write ```npm install``` to add the dependencies.
* In anothr window write ```npm run dev``` and the server will be available on ```loaclhost/8080``` and on your defult web browser ```local/3000``` will show up as well.

### Built With

* Client folder // jwt-decode, react, react-redux, redux-form, socket.io-client.
* Server folder // socket.io, redux, express, jsonwebtoken, bcryptjs, mocha, chai, heroku.
