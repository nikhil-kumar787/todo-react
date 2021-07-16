import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from './Signup/Signup';
import Signin from './Signin/Signin';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
        <Switch>
          <Route path="/" exact component={SignUp} />
          <Route path="/login" exact component={Signin} />
          </Switch>
          <NotificationContainer />
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
