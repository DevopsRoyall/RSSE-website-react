import { Container, Row, Col } from 'react-bootstrap';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footerCustom}>
      <Container>
        <Row>
          <Col className={`text-center ${styles.textCustom}`}>
            &copy; {new Date().getFullYear()} Royall Sim Sports Endurance
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

  