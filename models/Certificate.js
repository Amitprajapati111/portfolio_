const mongoose = require('mongoose');

const CertificateSchema = new mongoose.Schema({
  title: { type: String, required: true },
  issuer: { type: String, required: true },
  credentialUrl: { type: String, default: '' }
});

module.exports = mongoose.model('Certificate', CertificateSchema);
