import React, { useState } from 'react';
import axios from 'axios';
import { Link as RouterLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './loginpage.css'; // Import the CSS file


const Loginpage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/users/login', { email, password });
      localStorage.setItem('token', res.data.token);
      navigate('/admin');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='body'>
      <div className="lheader">
        <h3>Login to create Blog</h3>
        <RouterLink to="/" className="link">
              Back
        </RouterLink>
         
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button type="submit">Login</button>
        </form>
      </div>
      <div className="footer">
        <p>&copy; 2024 Tech Tonic </p>
      </div>
    </div>
  );
};

export default Loginpage;
