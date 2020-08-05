import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import BooksList from './components/BooksList/BooksList';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={BooksList} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  </Router>
);

export default App;
