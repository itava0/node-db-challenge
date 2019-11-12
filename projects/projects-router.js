const express = require("express");
const db = require("./projects-model.js");
const router = express.Router();

router.get("/", (req, res) => {
  db.get()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get projects" });
    });
});

router.post("/", (req, res) => {
  const newProject = req.body;

  db.addProject(newProject)
    .then(project => {
      res.status(201).json({ project: "was added successfully " });
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to create new project" });
    });
});

router.get("/:id/tasks", (req, res) => {
  const id = req.params.id;
  db.getTasks(id)
    .then(task => {
      if (task) {
        res.status(200).json(task);
      } else {
        res.status(404).json({ message: "Could not find task with given id." });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get task" });
    });
});

router.post("/:id/tasks", (req, res) => {
  const id = req.params.id;
  db.addTask(id, req.body)
    .then(task => {
      if (task) {
        res.status(201).json({ task: "was added successfully " });
      } else {
        res.status(404).json({ message: "Could not find task with given id." });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get task" });
    });
});

router.get("/resources", (req, res) => {
  db.getResources()
    .then(resources => {
      res.status(200).json(resources);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get resources" });
    });
});

router.post("/resources", (req, res) => {
  db.addResource(req.body)
    .then(resource => {
      res.status(201).json({ resource: "was added successfully " });
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get resource" });
    });
});

module.exports = router;
