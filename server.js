const express = require('express');
const helmet = require('helmet');

const projectsRouter = require('./data/projects/projectsRouter');
const actionsRouter = require('./data/actions/actionsRouter');
// const db = require('./data/dbConfig');

const server = express();

server.use(express.json());
server.use('/projects', projectsRouter);
server.use('/actions', actionsRouter);
server.use(helmet());

server.get('/', (req, res) => {
  res.send(`<h2>Arrrre yooouuuu Readddyyyyy for the Sprint Chaaaaallllennnngggge???`);
});

module.exports = server;