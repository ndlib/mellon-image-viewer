import React from "react"
import renderer from "react-test-renderer"

import MiradorViewer from "./index.js"

describe("MiradorViewer", () => {
  it("renders usage when there is no manifest.", () => {
    const tree = renderer
      .create(<MiradorViewer id="test" location={{seach: ""}} themeColor="#red" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("renders a manifest when there is a manifest.", () => {
    const tree = renderer
      .create(<MiradorViewer id="test" location={{seach: ""}} themeColor="#red" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
