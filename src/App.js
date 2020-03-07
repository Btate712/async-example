import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AstronautsContainer from './containers/AstronautsContainer';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <AstronautsContainer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
