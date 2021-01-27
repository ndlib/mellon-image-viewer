import React from "react"
// import { miradorImageToolsPlugin } from 'mirador-image-tools/es/'
import PropTypes from 'prop-types'
import typy from 'typy'
import queryString from 'query-string'
import Layout from '../components/layout'
import MiradorWrapper from '../components/miradorwrapper'
import Seo from '../components/seo'

// eslint-disable-next-line complexity
const MiradorViewerPage = ({ location }) => {
  const qs = queryString.parse(location.search)
  const itemTitle = typy(qs, 'itemTitle').safeString
  const itemImage = typy(qs, 'itemImage').safeString
  const hideWindowTitle = qs.title === 'false'
  const sideBarOpenByDefault = qs.sidebar === 'true'
  const thumbnailNavigationPosition = qs.thumbnails === 'true' ? 'far-bottom' : 'off'
  const fullscreen = qs.fullscreen !== 'false'
  const canvasIndex = parseInt(qs.cv, 10) || 0
  const viewerView = qs.view || 'default'
  const itemId = qs.manifest

  //const plugins = [...miradorImageToolsPlugin]
  const themeColor = "#blue"
  const plugins = []

  const config = {
    id: 'default-id',
    themes: {
      light: {
        palette: {
          type: 'light',
          primary: {
            main: themeColor,
          },
        },
      },
    },
    companionWindows:
      {
        position: 'right',
      },
    window: {
      allowClose: false,
      allowFullscreen: fullscreen,
      allowMaximize: false,
      hideWindowTitle: hideWindowTitle,
      sideBarOpenByDefault: sideBarOpenByDefault,
      defaultSideBarPanel: 'canvas',
    },
    responseHeaders: {
      'Content-Type': 'text/json',
    },
    windows: [
      {
        manifestId: itemId,
        canvasIndex: canvasIndex,
        maximized: false,
        thumbnailNavigationPosition: thumbnailNavigationPosition,
        view: viewerView,
        imageToolsEnabled: true,
        imageToolsOpen: true,
      },

    ],
    workspace: {
      showZoomControls: true,
      type: 'single',
    },
    workspaceControlPanel: {
      enabled: false,
    },

  }
  let body = null
  try {
    if (window && itemId) {
      body = (
        <MiradorWrapper
          config={config}
          plugins={plugins}
        />
      )
    } else {
      body = (
        <div>
          <h1>Please add a query parameters of manifest="path/to/manifest" to display</h1>
          <p>
          Query String Options
            <dl>
              <dt>manifest</dt>
              <dd>The manifest url</dd>
              <dt>itemTitle</dt>
              <dd>Title to display in the metadata head</dd>
              <dt>itemImage</dt>
              <dd>Thumbnail image for SEO</dd>
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
    }
  } catch {
    // console.warn('window does not exist in node')
  }
  return (
    <Layout location={location}>
      <Seo
        location={location}
        title={`${itemTitle} | Mirador Viewer`}
        description={`Mirador viewer viewing ${itemTitle}.`}
        image={itemImage}
        noIndex
      />
      <div className='sizeWrapper' style={{}}>
        {body}
      </div>
    </Layout>
  )
}
MiradorViewerPage.propTypes = {
  location: PropTypes.object.isRequired,
}
export default MiradorViewerPage
