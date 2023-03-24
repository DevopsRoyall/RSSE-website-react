import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import styles from './Header.module.css';
import logo from '../assets/RSSE_Outline_Endro_Racing.png';

const Header = () => {
  return (
    <Navbar className={styles.navbarCustom} variant="dark" expand="lg">
      <Navbar.Brand href="/">
        <img src={logo} alt="Royall Sim Sports Endurance" className={styles.logo} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          <NavDropdown title="Menu" id="basic-nav-dropdown" className={styles.navLinkCustom}>
            <NavDropdown.Item href="/schedule">Schedule</NavDropdown.Item>
            <NavDropdown.Item href="/drivers-and-teams">Drivers &amp; Teams</NavDropdown.Item>
            <NavDropdown.Item href="/pitwall-integration">Pitwall Integration</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
