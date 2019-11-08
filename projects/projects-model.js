const db = require("./data/db-config.js");

module.exports = {
  get,
  getById,
  addProject,
  getTasks,
  addTask,
  getResources,
  addResource
};

function get() {
  return db("project");
}

function getById(id) {
  return db("project").where({ id });
}

function addProject() {
  return db("project").insert(project);
}

function getTasks(id) {
  return db("project")
    .innerJoin("task", "task.id", "project.task_id")
    .where({ [project.id]: id });
}

function addTask(id, task) {
  return db("task")
    .where({ [project.id]: id })
    .insert(task);
}

function getResources() {
  return db('resource')
}

function addResource() {
  return db('resource').insert(resource)
}
