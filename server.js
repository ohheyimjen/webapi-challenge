const express = require('express');

const projectsRouter = require('./data/projects/projectsRouter');
const actionsRouter = require('./data/actions/actionsRouter');

const server = express();

server.use(express.json());
server.use('/projects', projectsRouter);
server.use('/actions', actionsRouter);

server.get('/', (req, res) => {
  res.send(`<h2>Arrrre yooouuuu Readddyyyyy for the Sprint Chaaaaallllennnngggge???`);
});

module.exports = server;