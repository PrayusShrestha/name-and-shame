import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home';
import Company from './components/Company';

function App() {
  return (
    <Router forceRefresh={true}>
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
