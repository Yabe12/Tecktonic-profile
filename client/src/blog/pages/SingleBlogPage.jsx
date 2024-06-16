import React from 'react';
import { Link } from 'react-router-dom';

const SingleBlogPage = ({ selectedPost }) => {
  return (
    <div>
      <h1>{selectedPost.title}</h1>
      <p>{selectedPost.content}</p>
      {/* Display image and other details here */}
      <Link to="/blog">Back</Link> {/* Use Link to navigate back */}
    </div>
  );
};

export default SingleBlogPage;
