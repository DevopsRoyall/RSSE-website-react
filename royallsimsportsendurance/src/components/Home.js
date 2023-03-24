import { Container, Button } from 'react-bootstrap';
import styles from './Home.module.css';
import logo from '../assets/RSSE_Outline_Endro_Racing.png';
import background from '../assets/AMG.jpg';

const Home = () => {
  return (
    <div className={styles.homeCustom} style={{ backgroundImage: `url(${background})` }}>
      <Container className={styles.homeTextCustom}>
        <img src={logo} alt="Royall Sim Sports Endurance" className={styles.logo} />
        <h1 className={styles.homeTitleCustom}>Welcome to Royall Sim Sports Endurance</h1>
        <h2 className={styles.homeSubtitleCustom}>The Ultimate Sim Racing Experience</h2>
        <Button className={styles.homeButtonCustom} href="/schedule">
          View Schedule
        </Button>
      </Container>
    </div>
  );
};

export default Home;
