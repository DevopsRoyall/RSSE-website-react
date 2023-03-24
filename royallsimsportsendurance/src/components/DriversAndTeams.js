import { Container, Row, Col, Card } from 'react-bootstrap';
import styles from './DriversAndTeams.module.css';

const DriversAndTeams = () => {
  // Fetch driver and team data here (API call or static data)
  // Example of static data:
  const driverData = [
    // ...
  ];

  return (
    <Container>
      <h2 className={styles.headingCustom}>Drivers & Teams</h2>
      <Row>
        {driverData.map((driver, index) => (
          <Col sm={6} md={4} lg={3} key={index}>
            <Card className={styles.cardCustom}>
              <Card.Img variant="top" src={driver.carImageUrl} />
              <Card.Body>
                <Card.Title className={styles.cardTitleCustom}>{driver.name}</Card.Title>
                <Card.Text className={styles.cardTextCustom}>Team: {driver.team}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default DriversAndTeams;
