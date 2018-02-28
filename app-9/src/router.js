import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Signup from './Signup';
import details from './details';

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/signup" component={Signup} />
    <Route path="/details" component={details} />
  </Switch>
);
