const express = require('express');
const helmet = require('helmet');
const projectsRouter = require('./projects/projects-router.js')
const server = express();

const setting = [helmet(), express.json()]

server.use(setting)
server.use('/api/projects', projectsRouter);

server.get('/', (req, res) => {
  res.send('Hello world')
})

module.exports = server;