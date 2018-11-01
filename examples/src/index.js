
import React from 'react';
import { render} from 'react-dom';
import ImageViewer from '../../src';

// read the url param so that we can set a url in the params
let urlParams;
(window.onpopstate = function () {
    let match,
        pl     = /\+/g,  // Regex for replacing addition symbol with a space
        search = /([^&=]+)=?([^&]*)/g,
        decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
        query  = window.location.search.substring(1);

    urlParams = {};
    while (match = search.exec(query))
       urlParams[decode(match[1])] = decode(match[2]);
})()

const App = () => (
  <ImageViewer manifest={urlParams['manifest']} />
);



render(<App />, document.getElementById("root"));
