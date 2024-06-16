import React, { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import styles from './../header.module.css';
import Dashboardbtn from './../../button/dashboardbtn';
import { useUserStore } from './../../../../../../server/lib/userStore'; // Adjust the path as per your file structure

function Dashbordheader() {
  const [isHovered, setIsHovered] = useState(false);
  const [showLogout, setShowLogout] = useState(false); // State to manage visibility of logout button
  const navigate = useNavigate();
  const { currentUser, isLoading, logout } = useUserStore(); // Get currentUser, isLoading, and logout from the store

  const handleDashboardClick = () => {
    navigate("/dashboard");
  };

  const handleItemClicked = (path) => {
    navigate(path);
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleAvatarClick = () => {
    setShowLogout(!showLogout); // Toggle logout button visibility
  };

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
        <ul className={styles.nav}>
          <li>
            <RouterLink to="/" className={styles.link}>
              Back
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/blog" className={styles.blog}>
              Blog
            </RouterLink>
          </li>
          {currentUser ? (
            <>
              <li>
                <div className={styles.avatarContainer}>
                  <img
                    src={currentUser.avatar || "/avatar.png"} // Replace with actual avatar URL
                    alt="User Avatar"
                    className={styles.avatar}
                    onClick={handleAvatarClick} // Toggle logout button on click
                  />
                  {showLogout && (
                    <button onClick={handleLogout} className={styles.logoutButton}>
                      Logout
                    </button>
                  )}
                </div>
              </li>
            </>
          ) : (
            <li>
              <RouterLink to="/login" className={styles.login}>
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