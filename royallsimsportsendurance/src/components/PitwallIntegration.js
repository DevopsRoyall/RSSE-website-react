import { Container } from 'react-bootstrap';
import styles from './PitwallIntegration.module.css';

const PitwallIntegration = () => {
  return (
    <Container>
      <h2 className={styles.headingCustom}>Pitwall Integration</h2>
      <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
      <iframe
        className={styles.iframeCustom}
        title="Pitwall Live"
        src="https://pitwall.live/timing/demo-free"
        allow="fullscreen"
      ></iframe>
      </div>
    </Container>
  );
};

export default PitwallIntegration;
