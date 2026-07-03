const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Import models
const Experience = require('../models/Experience');
const Project = require('../models/Project');
const Education = require('../models/Education');
const Certificate = require('../models/Certificate');
const Skill = require('../models/Skill');

dotenv.config();

const experiencesData = [
  {
    company: 'Infosys Springboard',
    role: 'Full Stack Developer Intern',
    location: 'Remote',
    type: 'Remote',
    startDate: '07.2025',
    endDate: '09.2025',
    duration: '2m',
    logoColor: '#007ACC',
    logoText: 'I',
    description: [
      'Developed RESTful APIs using Node.js and Express.js for a MERN-based civic issue reporting platform, supporting efficient issue submission and tracking.',
      'Implemented JWT-based authentication and secure password recovery, improving application security and protecting user access.',
      'Integrated Google Maps API and optimized MongoDB queries, supporting 10+ concurrent users and improving API response time by 25%.',
      'Collaborated with a team of 5+ developers using Git and GitHub, following Agile development workflows.'
    ],
    current: false
  }
];

const educationData = [
  {
    institution: 'Noida Institute of Engineering and Technology (NIET)',
    degree: 'B.Tech in Computer Science',
    fieldOfStudy: 'Computer Science & Engineering',
    location: 'Greater Noida, India',
    startDate: '2023',
    endDate: '2027',
    logoEmoji: '🎓',
    description: [
      'Focusing on Software Engineering, Data Structures & Algorithms, and Full Stack Development.',
      'CGPA: 7.6/10',
      'Active study of Operating Systems, OOP, DBMS, Cloud computing, and Computer Science fundamentals.'
    ]
  }
];

const certificatesData = [
  {
    title: 'AWS Academy Cloud Foundations',
    issuer: 'AWS Academy',
    credentialUrl: 'https://aws.amazon.com/training/'
  },
  {
    title: 'AWS Academy Cloud Architecture',
    issuer: 'AWS Academy',
    credentialUrl: 'https://aws.amazon.com/training/'
  },
  {
    title: 'GFG Hackfest Delhi NCR',
    issuer: 'GeeksforGeeks',
    credentialUrl: 'https://www.geeksforgeeks.org/'
  },
  {
    title: 'Code-A-Thone 2.0 Winner',
    issuer: 'NIET Hackathon Cell',
    credentialUrl: '#'
  }
];

const projectsData = [
  {
    title: 'Lernify',
    description: 'Real-Time Learning Management System (MERN + AWS) with WebRTC classroom capability.',
    tags: ['Fullstack', 'MERN', 'AWS'],
    docLink: 'https://github.com/Amitprajapati111/Lernify',
    liveLink: 'https://lernify.tech',
    featured: true,
    details: [
      'Built a full-stack LMS using React, Node.js, Express, and MongoDB to manage courses, live classes, assignments, and attendance for 100+ simulated student users during testing.',
      'Enabled real-time video classrooms using WebRTC with Socket.io signaling, supporting multi-user peer-to-peer communication for up to 8 participants per session.',
      'Applied JWT-based authentication and role-based access control (RBAC) to secure APIs and manage admin, teacher, and student workflows.',
      'Built an automated attendance system using WebRTC session data via Socket.io, reducing manual attendance time by ~90% compared to traditional roll-call methods.',
      'Deployed the application on AWS using EC2, Amplify, Nginx, PM2, and MongoDB Atlas, ensuring a scalable and production-ready environment.'
    ]
  },
  {
    title: 'Civic Issue Reporting Platform',
    description: 'A platform integrating Google Maps API and JWT authentication for community issue tracking.',
    tags: ['Fullstack', 'MERN', 'Backend'],
    docLink: 'https://github.com/Amitprajapati111/https---github.com-springboardmentor211-CleanStreet_Group3',
    liveLink: '#',
    featured: true,
    details: [
      'Developed RESTful APIs using Node.js and Express.js for a MERN-based civic issue reporting platform, supporting efficient issue submission and tracking.',
      'Implemented JWT-based authentication and secure password recovery, improving application security and protecting user access.',
      'Integrated Google Maps API and optimized MongoDB queries, supporting 10+ concurrent users and improving API response time by 25%.',
      'Collaborated with a team of 5+ developers using Git and GitHub, following Agile development workflows.'
    ]
  },
  {
    title: 'E-commerce Notes Dropshipping Website',
    description: 'A platform integrating Rezorpay for Payment Gateway.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    docLink: 'https://github.com/Amitprajapati111/Final-Dropshipping',
    liveLink: 'https://amitprajapati111.github.io/Final-Dropshipping',
    featured: true,
    details: [
      'Developed a responsive dropshipping website using HTML, CSS, and JavaScript, featuring product listings, shopping cart functionality, and a streamlined checkout experience.',
      'Integrated the Razorpay Payment Gateway to enable secure online payments, supporting seamless transaction processing during checkout.',
      'Designed a clean, mobile-friendly user interface with optimized page layouts, improving usability and providing a smooth shopping experience across devices.',
    ]
  }
];

const skillsData = [
  { name: 'Java', category: 'Languages', iconName: 'java', url: 'https://oracle.com/java' },
  { name: 'JavaScript', category: 'Languages', iconName: 'js', url: 'https://javascript.info' },
  { name: 'React', category: 'Frontend', iconName: 'react', url: 'https://react.dev' },
  { name: 'HTML5', category: 'Frontend', iconName: 'html', url: 'https://html.spec.whatwg.org' },
  { name: 'CSS3', category: 'Frontend', iconName: 'css', url: 'https://w3.org/Style/CSS' },
  { name: 'Tailwind CSS', category: 'Frontend', iconName: 'tailwind', url: 'https://tailwindcss.com' },
  { name: 'Bootstrap', category: 'Frontend', iconName: 'bootstrap', url: 'https://getbootstrap.com' },
  { name: 'Node.js', category: 'Backend', iconName: 'node', url: 'https://nodejs.org' },
  { name: 'Express.js', category: 'Backend', iconName: 'express', url: 'https://expressjs.com' },
  { name: 'MongoDB', category: 'Database', iconName: 'mongodb', url: 'https://mongodb.com' },
  { name: 'MySQL', category: 'Database', iconName: 'mysql', url: 'https://mysql.com' },
  { name: 'Git', category: 'Tools', iconName: 'git', url: 'https://git-scm.com' },
  { name: 'GitHub', category: 'Tools', iconName: 'github', url: 'https://github.com' },
  { name: 'Postman', category: 'Tools', iconName: 'postman', url: 'https://postman.com' },
  { name: 'VS Code', category: 'Tools', iconName: 'vscode', url: 'https://code.visualstudio.com' },
  { name: 'WebRTC', category: 'Concepts', iconName: 'webrtc', url: 'https://webrtc.org' },
  { name: 'Socket.io', category: 'Concepts', iconName: 'socketio', url: 'https://socket.io' },
  { name: 'AWS EC2', category: 'Cloud', iconName: 'ec2', url: 'https://aws.amazon.com/ec2' },
  { name: 'AWS Amplify', category: 'Cloud', iconName: 'amplify', url: 'https://aws.amazon.com/amplify' },
  { name: 'AWS S3', category: 'Cloud', iconName: 's3', url: 'https://aws.amazon.com/s3' }
];

const seedDB = async () => {
  try {
    const connStr = process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio';
    await mongoose.connect(connStr);
    console.log('Seed: Connected to Database...');

    // Clear old data
    await Experience.deleteMany({});
    await Project.deleteMany({});
    await Education.deleteMany({});
    await Certificate.deleteMany({});
    await Skill.deleteMany({});

    console.log('Seed: Cleared existing documents.');

    // Insert new data
    await Experience.insertMany(experiencesData);
    await Project.insertMany(projectsData);
    await Education.insertMany(educationData);
    await Certificate.insertMany(certificatesData);
    await Skill.insertMany(skillsData);

    console.log('Seed: Successfully seeded MongoDB data with Amit\'s profile!');
    process.exit(0);
  } catch (error) {
    console.error('Seed error:', error);
    process.exit(1);
  }
};

seedDB();
