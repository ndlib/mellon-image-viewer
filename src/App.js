import React, { Component} from "react";
import "./App.css";

class App extends Component{
  render(){
    return(
      <div className="App">
        <iframe width="{this.props.width}" height = "{this.props.height}" src="{this.props.manifest}#?c={this.props.c}&m={this.props.m}&s={this.props.s}&cv={this.props.cv}&xywh={this.props.xywh}"></iframe>
      </div>
    );
  }
}

export default App;


// SET TO LOAD IFRAME
// using existing S3 setup and manifest

//MAKE REACT COMPONENT
// that takes passed in parameters
