const mongoose = require('mongoose');

const SkillSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, default: 'Languages' },
  iconName: { type: String, required: true }, // Key for front-end styling/icon selection
  url: { type: String, default: '#' }
});

module.exports = mongoose.model('Skill', SkillSchema);
