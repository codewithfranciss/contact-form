// src/ViewMessages.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewMessages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/posts');
        setMessages(response.data);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch messages.');
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">View Messages</h2>
      {loading && <p>Loading...</p>}
      {error && <div className="alert alert-danger" role="alert">{error}</div>}
      {messages.length > 0 ? (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((msg) => (
              <tr key={msg._id}>
                <td>{msg.name}</td>
                <td>{msg.email}</td>
                <td>{msg.message}</td>
                <td>{new Date(msg.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No messages to display.</p>
      )}
    </div>
  );
};

export default ViewMessages;
