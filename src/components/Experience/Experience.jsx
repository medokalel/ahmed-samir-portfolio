import React from 'react';
import styles from './Experience.module.css';

const experiences = [
  {
    title: 'Senior Backend Engineer',
    company: 'TechStack Solutions Inc.',
    period: '2021 — PRESENT',
    points: [
      'Architected a serverless migration for legacy Node.js monoliths, reducing compute costs by 40%.',
      'Mentored a team of 12 junior developers, establishing strict ESLint rules and CI/CD pipelines.'
    ],
    isCurrent: true
  },
  {
    title: 'Backend Developer',
    company: 'Quantum Web Systems',
    period: '2018 — 2021',
    points: [
      'Developed and maintained RESTful APIs for a high-traffic e-commerce platform.',
      'Implemented real-time inventory tracking using WebSockets and Socket.io.'
    ],
    isCurrent: false
  },
  {
    title: 'Junior Software Engineer',
    company: 'Initial Seed Startup',
    period: '2016 — 2018',
    points: [
      'Integrated third-party payment gateways (Stripe, PayPal) into Express applications.'
    ],
    isCurrent: false
  }
];

const Experience = () => {
  return (
    <section id="experience" className={styles.experience}>
      <div className="container">
        <h2 className={styles.sectionTitle}>
          <span className={styles.bracket}>&lt;</span> Experience <span className={styles.bracket}>/&gt;</span>
        </h2>
        
        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.timelineDot}>
                <div className={`${styles.dot} ${exp.isCurrent ? styles.dotActive : ''}`}></div>
                {index !== experiences.length - 1 && <div className={styles.line}></div>}
              </div>
              
              <div className={styles.content}>
                <div className={styles.header}>
                  <div>
                    <h3 className={styles.title}>{exp.title}</h3>
                    <p className={styles.company}>{exp.company}</p>
                  </div>
                  <span className={`${styles.period} ${exp.isCurrent ? styles.periodActive : ''}`}>
                    {exp.period}
                  </span>
                </div>
                
                <ul className={styles.points}>
                  {exp.points.map((point, i) => (
                    <li key={i} className={styles.point}>
                      <span className={styles.arrow}>➤</span> {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;