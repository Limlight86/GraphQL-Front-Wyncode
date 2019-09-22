import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Content from '../content';

const AppRoot = _ => (
  <Router>
    <Content />
  </Router>
);

export default AppRoot;
