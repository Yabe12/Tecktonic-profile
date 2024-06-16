// LoginPage.js
import React, { useState } from 'react';
import { useNavigate , Link as RouterLink } from 'react-router-dom';
import './loginpage.css'
import axios from 'axios';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/middleware/auth/loginpage', { username, password });
      localStorage.setItem('token', response.data.token);
      // Redirect to admin dashboard or update state to indicate successful login
      navigate("/post")
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div>
      <div className="lheader">
        <nav>
          <RouterLink to= "/blog"> 
            <img src="https://cdn-icons-png.flaticon.com/128/10238/10238019.png" alt=""  height="40px"  />
          </RouterLink>
        </nav>
        <h3>Login and  create blog</h3>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit}> {/* Fix this line */}
          <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="email" />
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
          <button type="submit">Login</button>
        </form>
      </div>
      <br />
      <hr />
      <div className="footer">
        <p>Copyright 2024</p>
      </div>
    </div>
  );
}


export default LoginPage;
