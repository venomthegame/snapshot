import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Gallery from './Gallery';
import PageNotFound from './PageNotFound';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Gallery} />
          <Route path="/mountains" component={Gallery} />
          <Route path="/beaches" component={Gallery} />
          <Route path="/birds" component={Gallery} />
          <Route path="/food" component={Gallery} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
