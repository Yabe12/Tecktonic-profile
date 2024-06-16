import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogListingPage from './pages/BlogListingPage';
import SingleBlogPage from './pages/SingleBlogPage';
import LoginPage from './pages/login/loginpage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import CreateBlogPage from './pages/CreateBlogPage';
import EditBlogPage from './pages/EditBlogPage';

const BlogApp = () => {
  return (
      <Routes>
        <Route path="/" exact component={BlogListingPage} />
        <Route path="/blog/:id" component={SingleBlogPage} />
        <Route path="/loginpage" component={LoginPage} />
        <Route path="/admin-dashboard" component={AdminDashboardPage} />
        <Route path="/create-blog" component={CreateBlogPage} />
        <Route path="/edit-blog/:id" component={EditBlogPage} />
      </Routes>
  );
};

export default BlogApp;
