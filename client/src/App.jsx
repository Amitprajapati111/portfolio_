import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProfileCard from './components/ProfileCard';
import CommitWidget from './components/CommitWidget';
import Experience from './components/Experience';
import Stack from './components/Stack';
import Projects from './components/Projects';
import Education from './components/Education';
import Certificates from './components/Certificates';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

import {
  fetchExperience,
  fetchProjects,
  fetchEducation,
  fetchCertificates,
  fetchSkills
} from './utils/api';

const App = () => {
  const [vibe, setVibe] = useState('silver');
  const [experiences, setExperiences] = useState([]);
  const [projects, setProjects] = useState([]);
  const [education, setEducation] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [skills, setSkills] = useState([]);
  const [selectedTag, setSelectedTag] = useState('All');

  // Loadings
  const [loadingExp, setLoadingExp] = useState(true);
  const [loadingProjects, setLoadingProjects] = useState(true);
  const [loadingEdu, setLoadingEdu] = useState(true);
  const [loadingCerts, setLoadingCerts] = useState(true);
  const [loadingSkills, setLoadingSkills] = useState(true);

  const vibes = ['silver', 'cyber', 'forest', 'rose', 'light'];

  const cycleVibe = () => {
    const currentIdx = vibes.indexOf(vibe);
    const nextIdx = (currentIdx + 1) % vibes.length;
    setVibe(vibes[nextIdx]);
  };

  // Set global body class based on current theme vibe
  useEffect(() => {
    // Remove other vibe classes
    vibes.forEach(v => document.body.classList.remove(`vibe-${v}`));
    // Add current vibe class
    document.body.classList.add(`vibe-${vibe}`);
  }, [vibe]);

  // Initial data loading (except projects which fetch based on category selection)
  useEffect(() => {
    const loadData = async () => {
      try {
        const expData = await fetchExperience();
        setExperiences(expData);
      } catch (err) {
        console.error('Error loading experience:', err);
      } finally {
        setLoadingExp(false);
      }

      try {
        const eduData = await fetchEducation();
        setEducation(eduData);
      } catch (err) {
        console.error('Error loading education:', err);
      } finally {
        setLoadingEdu(false);
      }

      try {
        const certsData = await fetchCertificates();
        setCertificates(certsData);
      } catch (err) {
        console.error('Error loading certificates:', err);
      } finally {
        setLoadingCerts(false);
      }

      try {
        const skillsData = await fetchSkills();
        setSkills(skillsData);
      } catch (err) {
        console.error('Error loading skills:', err);
      } finally {
        setLoadingSkills(false);
      }
    };

    loadData();
  }, []);

  // Fetch projects on tag change
  useEffect(() => {
    const loadProjects = async () => {
      setLoadingProjects(true);
      try {
        const projData = await fetchProjects(selectedTag);
        setProjects(projData);
      } catch (err) {
        console.error('Error loading projects:', err);
      } finally {
        setLoadingProjects(false);
      }
    };
    loadProjects();
  }, [selectedTag]);

  return (
    <div className="portfolio-container">
      {/* 1. Header (Sticky Nav & Small Vibe Indicator) */}
      <Header currentVibe={vibe} cycleVibe={cycleVibe} />
      
      {/* 2. Hero Section (Big Styled Vibe Title & Vibes Switcher Badge) */}
      <Hero currentVibe={vibe} cycleVibe={cycleVibe} />
      
      {/* Hatch Pattern Line Divider */}
      <div className="hatch-divider"></div>
      
      {/* 3. Profile details (Matches layout of Image 4) */}
      <ProfileCard />

      {/* 4. GitHub Commits failed state retry widget */}
      <CommitWidget />
      
      {/* Hatch Pattern Line Divider */}
      <div className="hatch-divider"></div>
      
      {/* 5. Work Experience listing */}
      <Experience experiences={experiences} loading={loadingExp} />
      
      {/* Hatch Pattern Line Divider */}
      <div className="hatch-divider"></div>

      {/* 6. Stack listing */}
      <Stack skills={skills} loading={loadingSkills} />
      
      {/* Hatch Pattern Line Divider */}
      <div className="hatch-divider"></div>
      
      {/* 7. Projects Grid List with category dropdown filters */}
      <Projects 
        projects={projects} 
        loading={loadingProjects} 
        selectedTag={selectedTag} 
        onTagChange={setSelectedTag} 
      />
      
      {/* Hatch Pattern Line Divider */}
      <div className="hatch-divider"></div>
      
      {/* 8. Education details */}
      <Education education={education} loading={loadingEdu} />
      
      {/* 9. Certificates listing */}
      <Certificates certificates={certificates} loading={loadingCerts} />
      
      {/* Hatch Pattern Line Divider */}
      <div className="hatch-divider"></div>
      
      {/* 10. MERN Contact form saving to MongoDB */}
      <ContactForm />
      
      {/* Hatch Pattern Line Divider */}
      <div className="hatch-divider"></div>
      
      {/* 11. Footer containing copyright, socials & matching HUGE subtitle */}
      <Footer currentVibe={vibe} />
    </div>
  );
};

export default App;
