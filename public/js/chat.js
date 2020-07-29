var socket = io('http://quarantine-coffee.herokuapp.com/:3300');
/*const socket = io({
  transports: ['websocket']
});

// on reconnection, reset the transports option, as the Websocket
// connection may have failed (caused by proxy, firewall, browser, ...)
socket.on('reconnect_attempt', () => {
  socket.io.opts.transports = ['polling', 'websocket'];
});*/

const messageContainer = document.getElementById('message-container')
const messageForm = document.getElementById('send-container')
const messageInput = document.getElementById('message-input')


const name = prompt('What is your name?')
document.write(`<div class="text"><h1 style="text-align:center; padding:20px;background-color:rgb(111, 224, 237);margin:15px;height:100%;"> <i class="fa fa-comments-o" aria-hidden="true"></i>  <strong> ${name}</strong> </h1></div>`)
appendMessage(`<h5 style="color:blue;"><strong>You joined!!</strong></h5>`)
socket.emit('new-user', name)



socket.on('chat-message', data => {
  appendMessage(`<h5><strong> ${data.name} : ${data.message} </strong></h5>`)
})

socket.on('user-connected', name => {
  appendMessage(`<h5><strong> ${name} connected </strong></h5>`)
})

socket.on('user-disconnected', name => {
  appendMessage(`<h5><strong> ${name} disconnected</strong></h5>`)
})

messageForm.addEventListener('submit', e => {
  e.preventDefault()
  const message = messageInput.value
  appendMessage(`<h5 style="color:blue;"><strong>You: ${message}</strong></h5>`)
  socket.emit('send-chat-message', message)
  messageInput.value = ''
})

function appendMessage(message) {
  const messageElement = document.createElement('div')
  messageElement.innerHTML = message
  messageContainer.append(messageElement)
}

