import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home';
import Company from './components/Company';

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/companies/:name" 
            component={Company}>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
