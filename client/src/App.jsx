import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Portfolio/pages/home/home.jsx';
import About from './Portfolio/pages/about/about.jsx';
import Contact from './Portfolio/pages/contact/contact.jsx';
import Layout from './Portfolio/componets/layout/layout.jsx';
import './App.css';
import DashbordApp from './Dashbord/App.jsx';
import Login from './ReactChat/components/login/Login.jsx';
import ChatApp from './ReactChat/App.jsx';
import MainHeader from './Portfolio/componets/header/main/mainheader.jsx';
import Register from './ReactChat/components/login/register.jsx';
import 'react-toastify/dist/ReactToastify.css'; 
import Community from './Portfolio/pages/community/community.jsx';
import BlogApp from './blog/App.jsx';



function App() {
  
  return (
    <>
      <MainHeader />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<LandingPage />} />
        <Route path="/contact" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/chat" element={<ChatApp />} />
        <Route path="/blog/*" element={< Blog />} />
      </Routes>
    </>
  );
}

function LandingPage() {
  return (
    <div>
      <Layout>
        <Home />
        <About />
        <hr />
        <Community/>
        <Contact />
      </Layout>
    </div>
  );
}

function Dashboard() {
  return (
    <DashbordApp />
  );
}
function Blog() {
  return (
    <BlogApp />
  );
}

function ReactChat() {
  return (
    <ChatApp />
  );
}


export default App;