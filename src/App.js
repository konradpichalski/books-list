import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import BooksList from './components/BooksList/BooksList';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={BooksList} />
    </Switch>
  </Router>
);

export default App;
