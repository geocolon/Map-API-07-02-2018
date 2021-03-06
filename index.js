'use strict';

const express = require('express');
const morgan = require('morgan');
const passport = require('passport');

const usersRouter = require('./routes/users');
const notesRouter = require('./routes/notes');
const authRouter = require('./routes/auth');
const { localStrategy, jwtStrategy } = require('./passport/local');

const { dbConnect } = require('./db-mongoose');
const socket = require('socket.io');
const PORT = process.env.PORT || 8080;

const app = express();

app.use(
  morgan(process.env.NODE_ENV === 'production' ? 'common' : 'dev', {
    skip: (req, res) => process.env.NODE_ENV === 'test',
  }),
);

app.use(express.json());

passport.use(localStrategy);
passport.use(jwtStrategy);

// Mount routers
app.use('/api', usersRouter);
app.use('/api/notes', notesRouter);
app.use('/api/auth', authRouter);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

let server;

function runServer(port = PORT) {
  console.log('Run server!');
  server = app
    .listen(port, () => {
      console.info(`App listening on port ${server.address().port}`);
    })
    .on('error', err => {
      console.error('Express failed to start');
      console.error(err);
    });

  // socket.io to server
  const io = socket(server);
  io.on('connection', socket => {
    console.log('made socket connection', socket.id);

    // Handle chat event
    socket.on('chat', function(data) {
      io.sockets.emit('chat', data);
    });

    // Handle typing event
    socket.on('typing', function(data) {
      socket.broadcast.emit('typing', data);
    });
  });
}

function closeServer() {
  return new Promise((resolve, reject) => {
    console.log('Closing server');
    server.close(err => {
      if (err) {
        reject(err);
        // so we don't also call `resolve()`
        return;
      }
      resolve();
    });
  });
}

if (require.main === module) {
  dbConnect();
  runServer();
}

module.exports = { app, runServer, closeServer };
