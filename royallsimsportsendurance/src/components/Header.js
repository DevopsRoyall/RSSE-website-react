import { Navbar, Nav } from 'react-bootstrap';
import styles from './Header.module.css';
import logo from '../assets/RSSE_Outline_Endro_Racing.png';

const Header = () => {
  return (
    <Navbar className={styles.navbarCustom} variant="dark" expand="lg">
      <Navbar.Brand href="/">
        <img src={logo} alt="Royall Sim Sports Endurance" className={styles.logo} />
      </Navbar.Brand>
      <Nav className="mx-auto">
        <Nav.Link className={styles.navLinkCustom} href="/schedule">
          Schedule
        </Nav.Link>
        <Nav.Link className={styles.navLinkCustom} href="/drivers-and-teams">
          Drivers & Teams
        </Nav.Link>
        <Nav.Link className={styles.navLinkCustom} href="/pitwall-integration">
          Pitwall Integration
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Header;
