import React, { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import styles from './../header.module.css';
import Dashboardbtn from './../../button/dashboardbtn';
import { useUserStore } from './../../../../../../server/lib/userStore'; // Adjust the path as per your file structure
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons

function Dashbordheader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { currentUser, isLoading, logout } = useUserStore(); // Get currentUser, isLoading, and logout from the store

  const handleDashboardClick = () => {
    navigate("/dashboard");
  };

  const handleItemClicked = (path) => {
    navigate(path);
    setIsMenuOpen(false); // Close the menu on navigation
  };

  useEffect(() => {
    // Check if currentUser exists to decide navigation state
    if (!currentUser && !isLoading) {
      navigate("/login");
    }
  }, [currentUser, isLoading, navigate]);

  return (
    <header className={`${styles.header} ${styles.gradientBG}`}>
      <div className={styles.logo}>
        <img
          src="https://media.licdn.com/dms/image/D4E0BAQFtoH7AFayJWw/company-logo_200_200/0/1703627777248/techtonic_tribe_logo?e=1721260800&v=beta&t=a_wB0QFrU-XKXYfxBs58Uz8q1nsZ3PArl0hUeCxyQ7Y"
          alt="Tech Tonic"
        />
        <Dashboardbtn />
      </div>
      <nav>
        <button
          className={styles.menuToggle}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <ul className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <li>
            <RouterLink to="/" className={styles.link} onClick={() => handleItemClicked('/')}>
              Back
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/blog" className={styles.blog} onClick={() => handleItemClicked('/blog')}>
              Blog
            </RouterLink>
          </li>
          {currentUser ? (
            <li>
              <div className={styles.logo}>
                <img
                  src={currentUser.avatar || "/avatar.png"} 
                  alt="User Avatar"
                  className={styles.avatar}
                />
              </div>
            </li>
          ) : (
            <li>
              <RouterLink to="/login" className={styles.login} onClick={() => handleItemClicked('/login')}>
                Login
              </RouterLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Dashbordheader;
