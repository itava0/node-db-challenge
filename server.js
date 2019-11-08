const express = require('express');
const helmet = require('helmet');
const server = express();

const setting = [helmet(), express.json()]

server.use(setting)

server.get('/', (req, res) => {
  res.send('Hello world')
})

module.exports = server;