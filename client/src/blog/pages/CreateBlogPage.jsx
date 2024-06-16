import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CreateBlogPage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send a POST request to backend to create a new blog post
    // Redirect to admin dashboard upon successful creation
  };

  return (
    <div>
      <h1>Create Blog</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} />
        <button type="submit">Create</button>
      </form>
      <Link to="/admin-dashboard">Cancel</Link> {/* Navigate to admin dashboard */}
    </div>
  );
};

export default CreateBlogPage;
