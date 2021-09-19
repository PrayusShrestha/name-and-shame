import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home';
import Company from './components/Company';
import ReviewForm from './components/Review/ReviewForm';

function App() {
  return (
    <Router forceRefresh={true}>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/"
            component={Home}
          />
          <Route path="/companies/add"
            component={ReviewForm}
          />
          <Route path="/companies/:name" 
            component={Company} 
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
