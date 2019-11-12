const db = require("../data/db-config.js");

module.exports = {
  get,
  addProject,
  getTasks,
  addTask,
  getResources,
  addResource
};

function get() {
  return db("project");
}

function addProject(project) {
  return db("project").insert(project)
}

function getTasks(id) {
  return db("task").innerJoin('project', 'task.id', 'project.task_id')
  .where({task_id: id})
}

function addTask(id, task) {
  return db("task")
    .where({ task_id: id })
    .insert(task);
}

function getResources() {
  return db("resource");
}

function addResource(resource) {
  return db("resource").insert(resource);
}
