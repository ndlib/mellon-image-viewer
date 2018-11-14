import React from 'react';
import { render} from 'react-dom';
import ImageViewer from '../../src';
import { BrowserRouter as Router, Route } from "react-router-dom"


const App = (props) => (
  <Router>
    <Route path="/" exact component={ImageViewer} />
  </Router>
);

render(<App />, document.getElementById('root'))
