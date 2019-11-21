import React, { Component} from "react";
import PropTypes from 'prop-types';
import config from './config';
import queryString from 'query-string'

class ImageViewer extends Component{

  render(){
    const parsedQS = queryString.parse(this.props.location.search)

    let manifest = this.props.manifest
    let viewer = this.props.viewer
    if (parsedQS.manifest) {
      manifest = parsedQS.manifest
    }
    if (parsedQS.viewer) {
      viewer = parsedQS.viewer
    }
    let viewerURL = config[viewer]

    const updateManifestURL = () => {
      let manifest = document.getElementById("ManifestUrl")
      updateIFrame()
    }

    const changeViewer = (viewer) => {
        viewerURL = config[viewer]
        updateIFrame()
    }

    const updateIFrame = () => {
      console.log("Click Registered: ", viewerURL)
      if (document.getElementById('viewerFrame')) {
        var iframeParent = document.getElementById('iframeHolder')
        var iframe = document.getElementById('viewerFrame')
        var newIframe = document.createElement('iframe')
        newIframe.id = 'viewerFrame'
        newIframe.src = viewerURL + "#?manifest=" + manifest + "&c=" + this.props.c + "&m=" + this.props.m + "&s=" + this.props.s + "&cv=" + this.props.cv + "&xywh=" + this.props.xywh
        newIframe.width=this.props.width
        newIframe.height=this.props.height
        iframeParent.removeChild(iframe)
        iframeParent.appendChild(newIframe)

      }
    }

    return(
      <div id="viewer">
        <div id="iframeHolder">
          <iframe id = "viewerFrame" width={this.props.width} height={this.props.height} src={viewerURL + "#?manifest=" + manifest + "&c=" + this.props.c + "&m=" + this.props.m + "&s=" + this.props.s + "&cv=" + this.props.cv + "&xywh=" + this.props.xywh}></iframe>
        </div>
        <input type="text" name='ManifestUrl'  size={this.props.width/8} />
        <button id="update" onClick={() => updateManifestURL()}>Update</button>
        <img width="32px" id="mirador" onClick={() => changeViewer('mirador')} src='/src/img/mirador.png' />
        <img width="32px" id="imageViewer" onClick={() => changeViewer('universalViewer')} src='/src/img/uv.png' />
      </div>
    )
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
  viewer: "mirador",
  c: "",
  m: "",
  s: "",
  cv: "",
  xywh: "",
}
