
import React from 'react';
import { render} from 'react-dom';
import ImageViewer from '../../src';

const App = (props) => (
  <ImageViewer manifest={props.manifest} />
);

const el = document.getElementById('root')
console.error(el.getAttribute('data-param'))
render(<App manifest={el.getAttribute('data-param')} />, el)
