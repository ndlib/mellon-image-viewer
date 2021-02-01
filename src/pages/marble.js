import React from "react"
import { miradorImageToolsPlugin } from 'mirador-image-tools/es/'
import PropTypes from 'prop-types'
import Layout from '../components/layout'
import MiradorRenderer from '../components/miradorrenderer'
import Seo from '../components/seo'

// eslint-disable-next-line complexity
const MarbleViewerPage = ({ location }) => {

  return (
    <Layout location={location}>
      <Seo
        location={location}
        title={`Default Mirador Viewer`}
        description={`Default Viewer for Mirador.`}
        noIndex
      />
      <MiradorRenderer  id="marble-viewer" location={location} plugins={[...miradorImageToolsPlugin]} themeColor="#blue" />
    </Layout>
  )
}
MarbleViewerPage.propTypes = {
  location: PropTypes.object.isRequired,
}
export default MarbleViewerPage
