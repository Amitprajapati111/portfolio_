import React, { useState } from 'react';
import { sendMessage } from '../utils/api';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ success: null, message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ success: false, message: 'Please fill out all fields.' });
      return;
    }

    setLoading(true);
    setStatus({ success: null, message: '' });

    try {
      const response = await sendMessage(formData);
      if (response.success) {
        setStatus({ success: true, message: 'Message sent successfully!' });
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (err) {
      setStatus({ success: false, message: err.message || 'Failed to send message. Please check connection.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section section-wrapper">
      <h3 className="section-title">Send a Message</h3>
      
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group-row">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              placeholder="Your name"
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              placeholder="Your email address"
              className="form-input"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea 
            id="message" 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            placeholder="Type your message here..."
            className="form-textarea"
            rows="5"
            required
          ></textarea>
        </div>

        {status.message && (
          <div className={`form-status-alert ${status.success ? 'success' : 'error'}`}>
            {status.success ? '✓ ' : '⚠ '}
            {status.message}
          </div>
        )}

        <button type="submit" disabled={loading} className="btn btn-primary submit-btn">
          {loading ? 'Sending...' : 'Send Message ↗'}
        </button>
      </form>

      <style>{`
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 6px;
          padding: 1.5rem;
        }
        .form-group-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }
        @media (max-width: 550px) {
          .form-group-row {
            grid-template-columns: 1fr;
          }
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .form-group label {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--text-muted);
          text-transform: uppercase;
        }
        .form-input, .form-textarea {
          background-color: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          color: var(--text-primary);
          padding: 0.75rem 1rem;
          font-family: var(--font-sans);
          font-size: 0.95rem;
          outline: none;
          transition: all var(--transition-speed);
        }
        .form-input:focus, .form-textarea:focus {
          border-color: var(--text-muted);
          box-shadow: 0 0 10px var(--accent-glow);
        }
        .submit-btn {
          align-self: flex-start;
          padding: 0.75rem 1.5rem;
          font-weight: 600;
        }
        .submit-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        .form-status-alert {
          padding: 0.85rem 1rem;
          border-radius: 4px;
          font-family: var(--font-mono);
          font-size: 0.85rem;
        }
        .form-status-alert.success {
          background-color: rgba(52, 211, 153, 0.05);
          border: 1px solid rgba(52, 211, 153, 0.2);
          color: #34d399;
        }
        .form-status-alert.error {
          background-color: rgba(239, 68, 68, 0.05);
          border: 1px solid rgba(239, 68, 68, 0.2);
          color: #ef4444;
        }
      `}</style>
    </section>
  );
};

export default ContactForm;
