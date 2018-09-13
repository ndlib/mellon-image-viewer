import React, { Component} from "react";
import PropTypes from 'prop-types';

const universalViewerUrl = "https://d2i4hcwlwv1do1.cloudfront.net/"
class ImageViewer extends Component{
  render(){
    return(
      <iframe width={this.props.width} height={this.props.height} src={universalViewerUrl + "#?manifest=" + this.props.manifest + "&c=" + this.props.c + "&m=" + this.props.m + "&s=" + this.props.s + "&cv=" + this.props.cv + "&xywh=" + this.props.xywh}></iframe>
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
  width: "800px",
  height: "600px",
  manifest: "https://s3.amazonaws.com/mellon-data-broker-publicbucket-wtci53auglzt/manifest_prod.json",
  c: "",
  m: "",
  s: "",
  cv: "",
  xywh: "",
}
