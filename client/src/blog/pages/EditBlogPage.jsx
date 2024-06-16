import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const EditBlogPage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send a PUT request to backend to update the selected blog post
    // Redirect to admin dashboard upon successful update
  };

  return (
    <div>
      <h1>Edit Blog</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} />
        <button type="submit">Update</button>
      </form>
      <Link to="/admin-dashboard">Cancel</Link> {/* Navigate to admin dashboard */}
    </div>
  );
};

export default EditBlogPage;
