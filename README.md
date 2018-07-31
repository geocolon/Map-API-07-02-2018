# Socket.io messenger
I created this project to understand how to use Websocket.io, I wanted to create an instant messenger app. I made this app with a React and Redux frontend and programmed a node MongoDB server with passport authentication. 

# Installing

If you are cloning this repo and wanted to locally host both the client and the server, please open terminal window then ```cd``` to where you cloned this project. 

# Server

* Next cd into the server folder. Then type ```npm install``` to install to download the dependencies. 
* Next, create 3 terminal windows and type 3 different commands in each new window. 
* In the 1st window please write ```mongod```, hit return and you should see MongoDB running in your terminal now. 
* 2nd window writes the word ```mongo``` then hit return. The same result as before should show up as the mongo database starts up. 
* In the 3rd window write ```node start``` and the server will be available on ```loaclhost/8080``` on your machines web browser. If you have ```nodemon``` of course use it instead.

# Client

Next, in terminal ```cd``` into the client folder. then write ```npm install``` to add the dependencies. After the dependencies are done downloading write the command ```npm start```. You should see the Frontend in your web browser on ```local/3000```.