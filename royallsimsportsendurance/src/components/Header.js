import { Navbar, Nav } from 'react-bootstrap';
import styles from './Header.module.css';


const Header = () => {
    return (
      <Navbar className={styles.navbarCustom} variant="dark" expand="lg">
        <Navbar.Brand href="/">Royall Sim Sports Endurance</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
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
        </Navbar.Collapse>
      </Navbar>
    );
  };
  
  
  export default Header;
  