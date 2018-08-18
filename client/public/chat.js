'use strict';
/* global io */
// Make connection
// export const BASE_URL = process.env.REACT_APP_BASE_URL || 'https://new-socket-messegner.herokuapp.com/' || 'http://localhost:8080/';

// import BASE_URL from '../config';

const socket = io.connect('http://localhost:8080/');
// Query DOM 'http://localhost:8080/'
window.chatEmit = function(){
  var message = document.getElementById('message'),
    handle = document.getElementById('handle'),
    btn = document.getElementById('send'),
    output = document.getElementById('output'),
    feedback = document.getElementById('feedback');


  // Emit events
  btn.addEventListener('click', function(){
    socket.emit('chat', {
      message: message.value,
      handle: handle.getAttribute('value')
    });
    message.value = '';
  });

  message.addEventListener('keypress', function(){
    socket.emit('typing', handle.getAttribute('value'));
  });

  // Listen for events
  socket.on('chat', function(data){
    feedback.innerHTML = '';
    output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';
  });

  socket.on('typing', function(data){
    feedback.innerHTML = '<p><em>' + data + ' is typing a message...</em></p>';
  });
};

const menuAnimation = function(x) {
  x.classList.toggle('change');
};

