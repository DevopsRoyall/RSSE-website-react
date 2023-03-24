import { Container, Row, Col } from 'react-bootstrap';
import styles from './Header.module.css';

const Footer = () => {
    return (
      <footer style={{ backgroundColor: '#343a40', marginTop: '2rem', padding: '1rem 0' }}>
        <Container>
          <Row>
            <Col className="text-center text-white">
              &copy; {new Date().getFullYear()} Royall Sim Sports Endurance
            </Col>
          </Row>
        </Container>
      </footer>
    );
  };
  
  export default Footer;
  