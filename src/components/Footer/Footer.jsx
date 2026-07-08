import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.brand}>
            <span className={styles.brandText}>NODE_ENGINEER</span>
          </div>
          
          <div className={styles.copyright}>
            © 2024 NODE_ENGINEER. EXECUTION_SUCCESSFUL.
          </div>
          
          <div className={styles.links}>
            <a href="#" rel="noopener noreferrer">GitHub</a>
            <a href="#" rel="noopener noreferrer">LinkedIn</a>
            <a href="#">Documentation</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;