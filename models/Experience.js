const mongoose = require('mongoose');

const ExperienceSchema = new mongoose.Schema({
  company: { type: String, required: true },
  role: { type: String, required: true },
  location: { type: String, default: '' },
  type: { type: String, default: 'Remote' },
  startDate: { type: String, required: true },
  endDate: { type: String, default: 'Present' },
  duration: { type: String, default: '' },
  logoColor: { type: String, default: '#333' },
  logoText: { type: String, default: '' }, // First letter or monogram
  description: [{ type: String }],
  current: { type: Boolean, default: false }
});

module.exports = mongoose.model('Experience', ExperienceSchema);
