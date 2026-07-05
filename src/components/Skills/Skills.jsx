import React from 'react';
import styles from './Skills.module.css';

const skills = [
  {
    icon: 'fa-brands fa-node-js',
    title: 'Node.js',
    description: 'Asynchronous runtime & event loop optimization for high-scale applications.'
  },
  {
    icon: 'fa-solid fa-bolt',
    title: 'Express',
    description: 'Middleware-heavy server design with robust error handling and routing.'
  },
  {
    icon: 'fa-solid fa-database',
    title: 'MongoDB',
    description: 'NoSQL data modeling, aggregation pipelines, and performance indexing.'
  },
  {
    icon: 'fa-solid fa-table',
    title: 'PostgreSQL',
    description: 'Relational database design, complex joins, and transactional integrity.'
  },
  {
    icon: 'fa-solid fa-network-wired',
    title: 'REST APIs',
    description: 'HATEOAS compliant, versioned, and documented API ecosystems.'
  },
  {
    icon: 'fa-brands fa-docker',
    title: 'Docker',
    description: 'Containerization, multi-stage builds, and orchestration workflows.'
  }
];

const Skills = () => {
  return (
    <section id="skills" className={styles.skills}>
      <div className="container">
        <h2 className={styles.sectionTitle}>
          <span className={styles.bracket}>&lt;</span> Skills <span className={styles.bracket}>/&gt;</span>
        </h2>
        
        <div className="row g-4">
          {skills.map((skill, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4">
              <div className={styles.card}>
                <div className={styles.iconWrapper}>
                  <i className={skill.icon}></i>
                </div>
                <h3 className={styles.cardTitle}>{skill.title}</h3>
                <p className={styles.cardDesc}>{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;