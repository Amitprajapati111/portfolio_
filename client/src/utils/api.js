const API_BASE_URL = import.meta.env.VITE_API_URL || (import.meta.env.PROD ? '/api' : 'http://localhost:5000/api');


export const fetchExperience = async () => {
  const response = await fetch(`${API_BASE_URL}/experience`);
  if (!response.ok) throw new Error('Failed to fetch experience data');
  return response.json();
};

export const fetchProjects = async (tag = 'All') => {
  const url = tag === 'All' ? `${API_BASE_URL}/projects` : `${API_BASE_URL}/projects?tag=${encodeURIComponent(tag)}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error('Failed to fetch projects data');
  return response.json();
};

export const fetchEducation = async () => {
  const response = await fetch(`${API_BASE_URL}/education`);
  if (!response.ok) throw new Error('Failed to fetch education data');
  return response.json();
};

export const fetchCertificates = async () => {
  const response = await fetch(`${API_BASE_URL}/certificates`);
  if (!response.ok) throw new Error('Failed to fetch certificates data');
  return response.json();
};

export const fetchSkills = async () => {
  const response = await fetch(`${API_BASE_URL}/skills`);
  if (!response.ok) throw new Error('Failed to fetch skills data');
  return response.json();
};

export const sendMessage = async (messageData) => {
  const response = await fetch(`${API_BASE_URL}/messages`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(messageData),
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to send message');
  }
  return response.json();
};
