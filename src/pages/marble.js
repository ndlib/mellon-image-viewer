import React from "react"
import { miradorImageToolsPlugin } from 'mirador-image-tools/es/'
import PropTypes from 'prop-types'
import Layout from '../components/layout'
import MiradorRenderer from '../components/miradorrenderer'
import miradorDownloadPlugins from 'mirador-dl-plugin'
import Seo from '../components/seo'

// eslint-disable-next-line complexity
const MarbleViewerPage = ({ location }) => {
  let pluginList = location.search.includes('dl=true') ? [...miradorImageToolsPlugin, ...miradorDownloadPlugins] : [...miradorImageToolsPlugin]

  return (
    <Layout location={location}>
      <Seo
        location={location}
        title={`Marble IIIF Viewer`}
        description={`View IIIF manifests by adding the manifest url as a query string parameter to this page`}
        noIndex
      />
      <MiradorRenderer  id="marble-viewer" location={location} plugins={pluginList} themeColor="#blue" />
    </Layout>
  )
}
MarbleViewerPage.propTypes = {
  location: PropTypes.object.isRequired,
}
export default MarbleViewerPage
