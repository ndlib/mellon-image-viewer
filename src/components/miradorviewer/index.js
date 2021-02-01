import React from "react"
import PropTypes from "prop-types"
import Usage from './usage'
import { buildConfig } from './config'
import Wrapper from './wrapper'

const MiradorViewer = ({ id, location, plugins, themeColor }) => {
  const config = buildConfig(id, location, themeColor)

  let body = null
  try {
    if (config.windows[0].manifestId) {
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
    <div className='sizeWrapper' style={{}}>
      {body}
    </div>
  )
}

MiradorViewer.defaultProps = {
  plugins: [],
}

MiradorViewer.propTypes = {
  id: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired,
  plugins: PropTypes.array.isRequired,
  themeColor: PropTypes.string.isRequired,
}

export default MiradorViewer
