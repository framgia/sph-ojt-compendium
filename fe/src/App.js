import "./App.css";
import CreateReport from "./pages/Comments/Create/CommentCreate";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/reports/create"></Route>
          <CreateReport />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
