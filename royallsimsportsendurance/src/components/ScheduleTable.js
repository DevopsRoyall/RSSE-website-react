import { Table } from 'react-bootstrap';
import scheduleData from './ScheduleData';

const ScheduleTable = () => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Date</th>
          <th>Time</th>
          <th>Event</th>
        </tr>
      </thead>
      <tbody>
        {scheduleData.map((data) => (
          <tr key={data.id}>
            <td>{data.date}</td>
            <td>{data.time}</td>
            <td>{data.event}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ScheduleTable;
