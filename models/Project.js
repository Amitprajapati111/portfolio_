const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  tags: [{ type: String }],
  docLink: { type: String, default: '' }, // Link to code/repo
  liveLink: { type: String, default: '' }, // Link to live site
  featured: { type: Boolean, default: false },
  details: [{ type: String }] // Detailed bullet points
});

module.exports = mongoose.model('Project', ProjectSchema);
