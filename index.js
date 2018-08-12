'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const passport = require('passport');

const usersRouter = require('./routes/users');
const notesRouter = require('./routes/notes');
const authRouter = require('./routes/auth');
const {localStrategy, jwtStrategy } = require('./passport/local');

const { dbConnect } = require('./db-mongoose');
const socket = require('socket.io');
const PORT = process.env.PORT || 8080;


const app = express();
// Mount routers
app.use(cors());

passport.use(localStrategy);
passport.use(jwtStrategy);

app.use('/api/', usersRouter);
app.use('/api/notes', notesRouter);
app.use('/api/auth/', authRouter);


if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.use(
  morgan(process.env.NODE_ENV === 'production' ? 'common' : 'dev', {
    skip: (req, res) => process.env.NODE_ENV === 'test'
  })
);

app.use(express.json());


function runServer(port = PORT) {
  const server = app
    .listen(port, () => {
      console.info(`App listening on port ${server.address().port}`);
    })
    .on('error', err => {
      console.error('Express failed to start');
      console.error(err);
    });


  // socket.io to server
  const io = socket(server);
  io.on('connection', (socket) => {

    console.log('made socket connection', socket.id);

    // Handle chat event
    socket.on('chat', function(data){
      // console.log(data);
      io.sockets.emit('chat', data);
    });

    // Handle typing event
    socket.on('typing', function(data){
      socket.broadcast.emit('typing', data);
    });

  });
}


if (require.main === module) {
  dbConnect();
  runServer();
}

module.exports = { app };
