import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    console.log(`Fetching blog with id: ${id}`);
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/blogs/${id}`);
        console.log('Fetched blog detail:', res.data);
        setBlog(res.data);
      } catch (err) {
        console.error('Error fetching blog detail:', err);
      }
    };

    fetchBlog();
  }, [id]);

  return (
    <div>
      <button onClick={() => navigate(-1)}>Back</button>
      <img src={blog.image} alt={blog.title} />
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
    </div>
  );
};

export default BlogDetail;
