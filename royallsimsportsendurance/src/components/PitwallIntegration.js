import { Container } from 'react-bootstrap';
import styles from './PitwallIntegration.module.css';

const PitwallIntegration = () => {
  return (
    <Container>
      <h2 className={styles.headingCustom}>Pitwall Integration</h2>
      <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
        <iframe
          title="Pitwall Live"
          src="https://pitwall.live" // Replace this URL with the desired pitwall.live URL
          frameBorder="0"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        ></iframe>
      </div>
    </Container>
  );
};

export default PitwallIntegration;
