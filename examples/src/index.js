
import React from 'react';
import { render} from 'react-dom';
import ImageViewer from '../../src';

const App = () => (
  <ImageViewer manifest={this.props.manifest} />
);

const el = document.getElementById('root');

render(<App manifest={el.getAttribute('data-param')}} />, el);
