import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/blogs');
        console.log('Fetched blogs:', res.data); // Detailed log
        setBlogs(res.data);
      } catch (err) {
        console.error('Error fetching blogs:', err);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div>
      <h1>Blogs</h1>
      {blogs.map((blog) => (
        <div key={blog._id} className="blog-card">
          <Link to={`/blogs/${blog._id}`}>
            <img src={blog.image} alt={blog.title} />
            <h2>{blog.title}</h2>
            <p>{blog.summery}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
