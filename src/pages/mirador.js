import React from "react"
//import { miradorImageToolsPlugin } from 'mirador-image-tools/es/'
import PropTypes from 'prop-types'
import Layout from '../components/layout'
import MiradorRenderer from '../components/miradorrenderer'
import Seo from '../components/seo'

// eslint-disable-next-line complexity
const DefaultMiradorPage = ({ location }) => {

  return (
    <Layout location={location}>
      <Seo
        location={location}
        title={`Default Mirador Viewer`}
        description={`Default Viewer for Mirador.`}
        noIndex
      />
      <MiradorRenderer id="default-mirador-viewer" location={location} plugins={[]} themeColor="#blue" />
    </Layout>
  )
}
DefaultMiradorPage.propTypes = {
  location: PropTypes.object.isRequired,
}
export default DefaultMiradorPage
