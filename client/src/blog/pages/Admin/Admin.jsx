import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await axios.get('/api/admin/blogs', {
        headers: { Authorization: localStorage.getItem('token') }
      });
      setBlogs(res.data);
    };

    fetchBlogs();
  }, []);


  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

 const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(
      '/api/admin/blogs',
      { title, content, image },
      { headers: { Authorization: localStorage.getItem('token') } }
    );
    setTitle('');
    setContent('');
    setImage('');
    const res = await axios.get('/api/admin/blogs', {
      headers: { Authorization: localStorage.getItem('token') }
    });
    setBlogs(res.data);
  };

  const handleDelete = async (id) => {
    await axios.delete(`/api/admin/blogs/${id}`, {
      headers: { Authorization: localStorage.getItem('token') }
    });
    const res = await axios.get('/api/admin/blogs', {
      headers: { Authorization: localStorage.getItem('token') }
    });
    setBlogs(res.data);
  };


  return (
    <div>
      <h1>Admin Page</h1>
      <button onClick={handleLogout}>Logout</button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
        ></textarea>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Image URL"
        />
        <button type="submit">Create Blog</button>
      </form>
      <div>
        <h2>Blogs</h2>
        {blogs.map((blog) => (
          <div key={blog._id}>
            <h3>{blog.title}</h3>
            <button onClick={() => handleDelete(blog._id)}>Delete</button>
            {/* Implement Edit functionality if needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
