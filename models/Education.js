const mongoose = require('mongoose');

const EducationSchema = new mongoose.Schema({
  institution: { type: String, required: true },
  degree: { type: String, required: true },
  fieldOfStudy: { type: String, default: '' },
  location: { type: String, default: '' },
  startDate: { type: String, required: true },
  endDate: { type: String, default: '' },
  logoEmoji: { type: String, default: '🎓' },
  description: [{ type: String }]
});

module.exports = mongoose.model('Education', EducationSchema);
