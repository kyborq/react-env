import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { IndexPage } from './pages/IndexPage';
import { AboutPage } from './pages/AboutPage';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/about' component={AboutPage} />
        <Route path='/' component={IndexPage} />
      </Switch>
    </BrowserRouter>
  );
}
