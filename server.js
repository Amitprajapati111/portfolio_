const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const connectDB = require('./config/db');

// Import models
const Experience = require('./models/Experience');
const Project = require('./models/Project');
const Education = require('./models/Education');
const Certificate = require('./models/Certificate');
const Skill = require('./models/Skill');
const Message = require('./models/Message');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to database on request
app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (err) {
    console.error('Database connection error:', err.message);
    res.status(500).json({ error: 'Database connection error', details: err.message });
  }
});

// API Routes

// 1. Experience Route
app.get('/api/experience', async (req, res) => {
  try {
    const experiences = await Experience.find().sort({ current: -1, startDate: -1 });
    res.json(experiences);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 2. Project Route
app.get('/api/projects', async (req, res) => {
  try {
    const { tag } = req.query;
    let query = {};
    if (tag && tag !== 'All') {
      query.tags = tag;
    }
    const projects = await Project.find(query);
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 3. Education Route
app.get('/api/education', async (req, res) => {
  try {
    const education = await Education.find();
    res.json(education);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 4. Certificate Route
app.get('/api/certificates', async (req, res) => {
  try {
    const certificates = await Certificate.find();
    res.json(certificates);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 5. Skill/Stack Route
app.get('/api/skills', async (req, res) => {
  try {
    const skills = await Skill.find();
    res.json(skills);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 6. Contact Form - Post Message
app.post('/api/messages', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    const newMessage = new Message({ name, email, message });
    await newMessage.save();
    res.status(201).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 7. Get Messages (for inspection/testing)
app.get('/api/messages', async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Serve frontend in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
  });
} else {
  app.get('/', (req, res) => {
    res.send('API is running...');
  });
}

if (!process.env.VERCEL) {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;

