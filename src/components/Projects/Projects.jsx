import React from 'react';
import styles from './Projects.module.css';

const projects = [
  {
    name: 'MicroNet Core',
    category: 'SERVICE MESH',
    description: 'A high-performance service discovery and load balancing library for internal Node.js microservices with built-in circuit breaking.',
    tags: ['Express', 'Redis', 'gRPC'],
    link: '#'
  },
  {
    name: 'LogFlow Aggregator',
    category: 'DATA PIPELINE',
    description: 'Distributed logging platform capable of processing 10k+ events per second using Kafka and Node.js worker threads.',
    tags: ['Kafka', 'Workers', 'MongoDB'],
    link: '#'
  },
  {
    name: 'AuthShield Pro',
    category: 'SECURE AUTH',
    description: 'Enterprise-grade authentication provider featuring OAuth2, MFA, and JWT fingerprinting for sensitive banking applications.',
    tags: ['Cryptography', 'PostgreSQL', 'TypeScript'],
    link: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <h2 className={styles.sectionTitle}>
          <span className={styles.bracket}>&lt;</span> Projects <span className={styles.bracket}>/&gt;</span>
        </h2>
        
        <div className="row g-4">
          {projects.map((project, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4">
              <div className={styles.card}>
                {/* Terminal Header */}
                <div className={styles.terminalHeader}>
                  <div className={styles.dots}>
                    <span className={styles.dotRed}></span>
                    <span className={styles.dotYellow}></span>
                    <span className={styles.dotGreen}></span>
                  </div>
                  <span className={styles.category}>{project.category}</span>
                </div>
                
                <div className={styles.cardBody}>
                  <h3 className={styles.projectName}>{project.name}</h3>
                  <p className={styles.description}>{project.description}</p>
                  
                  <div className={styles.tags}>
                    {project.tags.map((tag, i) => (
                      <span key={i} className={styles.tag}>
                        <i className="fa-solid fa-tag"></i> {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className={styles.cardFooter}>
                  <a href={project.link} className={styles.btnView}>
                    <i className="fa-brands fa-github"></i> View on GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;