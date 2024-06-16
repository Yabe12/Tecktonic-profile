import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import styles from './../header.module.css';
import Chatpagebtn from './../../button/chatpagebtn';


function Chatpageheader() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Chatpagebtn />
      </div>
      <nav>
        <ul className={styles.nav}>
          <li>
            <RouterLink to="/" className={styles.link}>Home</RouterLink>
          </li>
    
          <li>
            <RouterLink to="/dashboard" className={`${styles.link} ${styles.login}`}>Dashboard</RouterLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Chatpageheader;
