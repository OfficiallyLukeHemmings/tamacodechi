const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  title: { type: String, required: true, trim: true, },
  desc: { type: String, required: false, trim: false, },
  link: { type: String, required: false, trim: false },
  complete: { type: Boolean, default: false, }
})

const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project; 