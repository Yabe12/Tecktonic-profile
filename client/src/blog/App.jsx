import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BlogHome from './pages/BlogHome/BlogHome';
import BlogDetail from './pages/BlogDetail/BlogDetail';
import Admin from './pages/Admin/Admin';
import Loginpage from './pages/login/loginpage';

const BlogApp = () => {
  return (
    <Routes>
      <Route path="/loginpage" component={Loginpage} />
      <Route path="/blogs/:id" component={BlogDetail} />
      <Route path="/admin" component={Admin} />
      <Route path="/" component={BlogHome} />
    </Routes>
  );
};

export default BlogApp;
