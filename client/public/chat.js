'use strict';
/* global io */
// Make connection
export const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:8080/';

const socket = io.connect(BASE_URL);
// Query DOM 'http://localhost:8080'
window.chatEmit = function(){
  var message = document.getElementById('message'),
    handle = document.getElementById('handle'),
    btn = document.getElementById('send'),
    output = document.getElementById('output'),
    feedback = document.getElementById('feedback');


  console.log('this is the send btn: ',btn);
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



