import React from "react"
import { miradorImageToolsPlugin } from 'mirador-image-tools/es/'
import PropTypes from 'prop-types'
import Layout from '../components/layout'
//import MiradorRenderer from '../components/miradorrenderer'
import Seo from '../components/seo'
import Usage from '../components/miradorrenderer/usage'
import { buildConfig } from '../components/miradorrenderer/config'
import Wrapper from '../components/miradorrenderer/wrapper'

// eslint-disable-next-line complexity
const MarbleViewerPage = ({ location }) => {
  const config = buildConfig("marble-viewer", location, '#blue')
  console.log('config', config)
  const plugins = [...miradorImageToolsPlugin]
  let body = null
  try {
    if (window && config.windows[0].manifestId) {
      body = (
        <Wrapper
          config={config}
          plugins={plugins}
        />
      )
    } else {
      body = (
        <Usage />
      )
    }
  } catch {
    console.warn('window does not exist in node')
  }
  return (
    <Layout location={location}>
      <Seo
        location={location}
        title={`Default Mirador Viewer`}
        description={`Default Viewer for Mirador.`}
        noIndex
      />
      <div className='sizeWrapper' style={{}}>
        {body}
      </div>
    </Layout>
  )
}
MarbleViewerPage.propTypes = {
  location: PropTypes.object.isRequired,
}
export default MarbleViewerPage
