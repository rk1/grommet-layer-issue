import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { App, Anchor, Box } from 'grommet';
import 'grommet/grommet.min.css';

import Home from './Home';
import About from './About';

const Example = () => (
  <App>
    <Router>
      <Box>
        <Anchor path="/">
          Home
        </Anchor>
        <Anchor path="/about">
          About
        </Anchor>

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Box>
    </Router>
  </App>
);

export default Example;
