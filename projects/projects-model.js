const db = require('./data/db-config.js');

module.exports = {
  get,
  getById,
  addProject
}

function get() {
  return db('project');
}

function getById() {
  return db('project').where({id});
}

