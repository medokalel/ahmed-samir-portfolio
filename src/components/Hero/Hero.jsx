import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      {/* خلفية النجوم */}
      <div className={styles.stars}></div>
      
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <div className={styles.versionBadge}>v2.4.0-stable successfully loaded</div>
            
            <h1 className={styles.name}>Ahmed_Samir</h1>
            
            {/* الخط الأخضر تحت الاسم */}
            <div className={styles.underline}></div>
            
            <p className={styles.title}>Backend Developer · Node.js</p>
            
            <p className={styles.description}>
              Engineering high-performance distributed systems with a focus on low-latency architectures, concurrency management, and developer-first API design.
            </p>
            
            <div className={styles.buttons}>
              <a href="#projects" className={styles.btnPrimary}>
                Explore Codebase
              </a>
              <a href="#contact" className={styles.btnOutline}>
                Ping Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;