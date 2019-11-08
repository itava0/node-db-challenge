const db = require('./data/db-config.js');

module.exports = {
  get,
  getById,
  addProject,
  getTasks
}

function get() {
  return db('project');
}

function getById(id) {
  return db('project').where({id});
}

function addProject() {
  return db('project').insert(project);
}

function getTasks(id) {
  return db('project').innerJoin('task', 'task.id', 'project.task_id').where({[project.id]: id})
}
