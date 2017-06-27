import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import DevTools from 'components/DevTools';
import AppTemp from './AppTemp';

const App = () => (
  <Router>
    <div>
      {process.env.NODE_ENV === 'development' && <DevTools />}

      <Switch>
        <Route exact path="/" component={AppTemp} />
        <Route path="/shahaf" component={AppTemp} />
      </Switch>
    </div>
  </Router>
);

export default App;
