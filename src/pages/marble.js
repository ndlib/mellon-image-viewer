import React from "react"
import { miradorImageToolsPlugin } from 'mirador-image-tools/es/'
import PropTypes from 'prop-types'
import Layout from '../components/layout'
import MiradorViewer from '../components/miradorviewer'
import Seo from '../components/seo'

// eslint-disable-next-line complexity
const MiradorViewerPage = ({ location }) => {

  return (
    <Layout location={location}>
      <Seo
        location={location}
        title={`Default Mirador Viewer`}
        description={`Default Viewer for Mirador.`}
        noIndex
      />
      <MiradorViewer  id="marble-viewer" location={location} plugins={[...miradorImageToolsPlugin]} themeColor="#blue" />
    </Layout>
  )
}
MiradorViewerPage.propTypes = {
  location: PropTypes.object.isRequired,
}
export default MiradorViewerPage
