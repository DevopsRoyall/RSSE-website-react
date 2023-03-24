import { Container, Table } from 'react-bootstrap';
import styles from './Schedule.module.css';

const Schedule = () => {
  // Fetch schedule data here (API call or static data)
  // Example of static data:
  const scheduleData = [
    // ...
  ];

  return (
    <Container>
      <h2 className={styles.headingCustom}>Schedule</h2>
      <Table striped bordered hover>
        <thead>
          {/* Table headers */}
        </thead>
        <tbody>
          {/* Map through the fetched data and create table rows */}
        </tbody>
      </Table>
    </Container>
  );
};

export default Schedule;
