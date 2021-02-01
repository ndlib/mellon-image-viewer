import React from "react"

const Usage = () => (
  <div>
    <h1>Please add a query parameters of manifest="path/to/manifest" to display</h1>
    <p>
    Query String Options
      <dl>
        <dt>manifest</dt>
        <dd>The manifest url</dd>
        <dt>sidebar</dt>
        <dd>Sidebar open by default (true or false)</dd>
        <dt>thumbnails</dt>
        <dd>Thumbnail Navigation Position true === far-bottom false === off</dd>
        <dt>fullscreen</dt>
        <dd>Show full screen or not (true or false)</dd>
        <dt>canvasIndex</dt>
        <dd>Canvas index to start at</dd>
        <dt>view</dt>
        <dd>viewerView if not default</dd>
      </dl>
    </p>
  </div>
)
export default Usage
