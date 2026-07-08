import React from 'react';
import styles from './Contact.module.css';

const Contact= () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <div className={styles.card}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.bracket}>&lt;</span> Contact <span className={styles.bracket}>/&gt;</span>
          </h2>
          
          <p className={styles.description}>
            Currently open for backend architecture consulting or senior-level remote opportunities.
          </p>
          
          <div className={styles.links}>
            <a href="mailto:alex@example.com" className={styles.link}>
              <i className="fa-regular fa-envelope"></i>
              <span>Email</span>
            </a>
            
            <a href="#" rel="noopener noreferrer" className={styles.link}>
              <i className="fa-brands fa-github"></i>
              <span>GitHub</span>
            </a>
            
            <a href="#" rel="noopener noreferrer" className={styles.link}>
              <i className="fa-brands fa-linkedin"></i>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;