import React, { Component} from "react";
import "./App.css";
import ImageViewer from "./ImageViewer.js";

class App extends Component{
  render(){
    return(
      <div className="App">
          <ImageViewer
          width="800px"
            height="600px"
            manifest="http://wellcomelibrary.org/iiif/b19646045/manifest"
            c=""
            m=""
            s=""
            cv=""
            xywh="" />
        </div>
    );
  }
}

export default App;


// SET TO LOAD IFRAME
// using existing S3 setup and manifest

//MAKE REACT COMPONENT
// that takes passed in parameters
