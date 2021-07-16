import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from './Signup/Signup';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
        <Switch>
          <Route path="/" exact component={SignUp} />
          </Switch>
      </Router>
      </header>

      {/* <Router>
        <Switch>
          <Route path="/" exact component={Signup} />
          </Switch>
      </Router> */}
    </div>
  );
}

export default App;
