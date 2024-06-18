import React from 'react';
import { Route, Routes } from 'react-router-dom';
import "./BlogApp.css";
import BlogList from './pages/BlogList';
import BlogDetail from './pages/BlogDetail';

const BlogApp = () => {
  return (
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path=":id" element={<BlogDetail />} />
      </Routes>
  );
};

export default BlogApp;
