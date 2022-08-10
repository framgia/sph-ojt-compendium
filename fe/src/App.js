import './App.css';
import CREATE_DAILY_REPORT from './pages/CREATE_DAILY_REPORT';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path = "/report/create"></Route>
        <CREATE_DAILY_REPORT/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
