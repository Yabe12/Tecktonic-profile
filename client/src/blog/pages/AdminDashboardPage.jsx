import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboardPage = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <Link to="/create-blog">Create Blog</Link>
      <Link to="/loginpage">Logout</Link>
      {/* Display list of existing blog posts with edit and delete buttons */}
    </div>
  );
};

export default AdminDashboardPage;
