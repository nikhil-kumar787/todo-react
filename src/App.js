import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from './Signup/Signup';
import Signin from './Signin/Signin';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';
import Welcome from './Welcome/Welcome';
import Forward from './Welcome/Forward';
import Home from './Home/Home';
import CardTodo from './components/Card';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Switch>
          <Route path="/" exact component={SignUp} />
          <Route path="/login" exact component={Signin} />
          <Route path="/confirm/:confirmationCode" component={Welcome} />
          <Route path="/forward" exact component={Forward} />
          <Route path="/home" exact component={Home} />
          <Route path="/card" exact component={CardTodo} />
          </Switch>
          <NotificationContainer />
      </Router>
    

      {/* <Router>
        <Switch>
          <Route path="/" exact component={Signup} />
          </Switch>
      </Router> */}
    </div>
  );
}

export default App;
