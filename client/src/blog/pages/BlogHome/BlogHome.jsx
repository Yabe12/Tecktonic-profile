import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BlogHome = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await axios.get('/api/blogs');
      setBlogs(res.data);
    };

    fetchBlogs();
  }, []);

  return (
    <div>
      <h1>Blog Home</h1>
      {blogs.map((blog) => (
        <Link to={`/blogs/${blog._id}`} key={blog._id}>
          <div>
            <img src={blog.image} alt={blog.title} />
            <h2>{blog.title}</h2>
            <p>{blog.content.substring(0, 100)}...</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogHome;
