import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // تحديد السيكشن النشط
      const sections = ['skills', 'projects', 'experience', 'contact'];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
      
      // لو فوق كل السيكشنز، خلي الـ hero نشط
      if (window.scrollY < 300) {
        setActiveSection('');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { id: 'skills', label: 'SKILLS' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'experience', label: 'EXPERIENCE' },
    { id: 'contact', label: 'CONTACT' },
  ];

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <div className={styles.navContent}>
          <a href="#" className={styles.logo}>
            &lt;DEV_LOG&gt;
          </a>
          
          <div className={styles.centerLinks}>
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`${styles.link} ${activeSection === link.id ? styles.active : ''}`}
                onClick={handleLinkClick}
              >
                {link.label}
              </a>
            ))}
          </div>
          
          <a href="../../assets/files/Ahmed_Samir_Resume.pdf" download className={styles.resumeBtn}>
            <i className="fa-solid fa-download"></i> RESUME
          </a>
          
          <button 
            className={styles.toggle}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>
        
        {/* Mobile Menu */}
        <div className={`${styles.mobileMenu} ${isOpen ? styles.mobileOpen : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`${styles.mobileLink} ${activeSection === link.id ? styles.mobileActive : ''}`}
              onClick={handleLinkClick}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;