import React, { Component} from "react";
import PropTypes from 'prop-types';
import config from './config';
import queryString from 'query-string'

class ImageViewer extends Component{
  render(){
    console.log(this.props)
    const parsedQS = queryString.parse(this.props.location.search)

    console.log(parsedQS)
    let manifest = this.props.manifest
    if (parsedQS.manifest) {
      manifest = parsedQS.manifest
    }

    return(
      <iframe width={this.props.width} height={this.props.height} src={config.universalViewerUrl + "#?manifest=" + manifest + "&c=" + this.props.c + "&m=" + this.props.m + "&s=" + this.props.s + "&cv=" + this.props.cv + "&xywh=" + this.props.xywh}></iframe>
    );
  }
}
export default ImageViewer;

ImageViewer.propTypes = {
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  manifest: PropTypes.string,
  c: PropTypes.string,
  m: PropTypes.string,
  s: PropTypes.string,
  cv: PropTypes.string,
  xywh: PropTypes.string,
}

ImageViewer.defaultProps = {
  width: "800",
  height: "600",
  manifest: "https://s3.amazonaws.com/mellon-data-broker-publicbucket-wtci53auglzt/manifest_prod.json",
  c: "",
  m: "",
  s: "",
  cv: "",
  xywh: "",
}
