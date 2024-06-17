const Project = require("../models/projectModel");

const getProjects = async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
}

const createProject = (req, res) => {
  const project = new Project({
    title: req.body.title,
    desc: req.body.desc,
    link: req.body.link,
  });

  project.save();

  res.json(project);
}

const deleteProject = async (req, res) => {
  const deletedProject = await Project.findByIdAndDelete(req.params.id)
  res.json(deletedProject);
}

const toggleProjectCompletion = async (req, res) => {
  const project = await Project.findById(req.params.id);
  project.complete = !project.complete;
  project.save()
  res.json(project);
}

exports.getProjects = getProjects;
exports.createProject = createProject;
exports.deleteProject = deleteProject;
exports.toggleProjectCompletion = toggleProjectCompletion;