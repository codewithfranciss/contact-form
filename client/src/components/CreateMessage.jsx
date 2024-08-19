import React, { useState } from 'react';
import axios from 'axios';

const CreateMessage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    try {
      const response = await axios.post('http://localhost:3001/api/posts', { name, email, message });
      console.log(response.data);
      setSuccess(true); // Show success
      setError(null);
      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      console.error(err);
      setError('An error occurred. Please try again.'); // Show error
      setSuccess(false);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Contact Us</h2>
      {success && (
        <div className="alert alert-success" role="alert">
          Message sent successfully!
        </div>
      )}
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group mt-3">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group mt-3">
          <label htmlFor="message">Message</label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="3"
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary mt-3" disabled={loading}>
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

export default CreateMessage;
