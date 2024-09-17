import React, { useState } from 'react';
import './ContactSection.css';
import { database } from '../../firebase.ts';
import { ref, push, serverTimestamp } from 'firebase/database';

const ContactSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const emailsRef = ref(database, 'emails');
        await push(emailsRef, {
            email,
            timestamp: serverTimestamp() 
        });
      console.log('Email stored successfully');
      setEmail('');
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error storing email:', error);
    }
  };

  return (
    <section className="contact-section">
      <div className="container">
        <h2 className="title">Reach out to us</h2>
        <p className="description">
          Have questions or want to learn more? Drop us your email and we'll get back to you.
        </p>
        <form onSubmit={handleSubmit} className="form">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="email-input"
          />
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
        {isSubmitted && (
          <p className="thank-you-message">Thanks for reaching out to us! We'll be in touch soon.</p>
        )}
      </div>
    </section>
  );
};

export default ContactSection;