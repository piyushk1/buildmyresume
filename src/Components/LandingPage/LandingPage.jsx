
import { useNavigate } from 'react-router-dom';
import styles from './LandingPage.module.css';

const LandingPage = () => {
  const navigate = useNavigate(); 

  return (
    <div className={styles.landingPage}>
      <header className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>Welcome to Resume Builder</h1>
          <p className={styles.subtitle}>
            Create professional resumes effortlessly with customizable layouts and themes.
          </p>
          <button
            className={styles.ctaButton}
            onClick={() => navigate('/resumebuilder')} 
          >
            Start Building
          </button>
        </div>
      </header>

      <section className={styles.features}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Why Use Resume Builder?</h2>
          <div className={styles.featureCards}>
            <div className={styles.featureCard}>
              <h3 className={styles.featureTitle}>Dynamic Layouts</h3>
              <p className={styles.featureDescription}>
                Easily switch between layouts to find the perfect resume style.
              </p>
            </div>
            <div className={styles.featureCard}>
              <h3 className={styles.featureTitle}>Theme Switching</h3>
              <p className={styles.featureDescription}>
                Choose between light and dark modes to suit your preference.
              </p>
            </div>
            <div className={styles.featureCard}>
              <h3 className={styles.featureTitle}>PDF Export</h3>
              <p className={styles.featureDescription}>
                Download your resume in PDF format with a single click.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <p className={styles.footerText}>© 2024 Resume Builder. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
