const express = require("express");
const router = express.Router();

const { getProjects, createProject, deleteProject, toggleProjectCompletion } = require("../controllers/projectController");

router.get("/projects", getProjects);
router.post("/projects/new", createProject);
router.delete("/projects/delete/:id", deleteProject);
router.get("/projects/toggle/:id", toggleProjectCompletion);

module.exports = router;