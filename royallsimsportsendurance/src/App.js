import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Schedule from './components/Schedule';
import DriversAndTeams from './components/DriversAndTeams';
import PitwallIntegration from './components/PitwallIntegration';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/schedule" component={Schedule} />
        <Route path="/drivers-and-teams" component={DriversAndTeams} />
        <Route path="/pitwall-integration" component={PitwallIntegration} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
