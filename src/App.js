import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Pages/login';
import pagenotfound from './Pages/pagenotfound';
import Signup from './Pages/signup';
import 'mapbox-gl/dist/mapbox-gl.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route path='*' component={pagenotfound} />
      </Switch>
    </Router>
  );
}

export default App;
