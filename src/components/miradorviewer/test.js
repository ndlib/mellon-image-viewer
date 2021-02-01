import React from "react"
import renderer from "react-test-renderer"
import mirador from 'mirador'
import MiradorViewer from "./index.js"

describe("MiradorViewer", () => {
  it("renders usage when there is no manifest.", () => {
    const tree = renderer
      .create(<MiradorViewer id="test" location={{search: ""}} themeColor="#red" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("renders a manifest when there is a manifest.", () => {
    const tree = renderer
      .create(<MiradorViewer id="test" location={{search: "?manifest=manfiest"}} themeColor="#red" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it ("calls the mocked mirador viewer function to setup mirador when there is a manfiest", () => {
    const currentCallLength = mirador.viewer.mock.calls.length
    const tree = renderer
      .create(<MiradorViewer id="test" location={{search: "?manifest=manfiest"}} themeColor="#red" />)
      .toJSON()

    expect(mirador.viewer.mock.calls.length).toBe(currentCallLength + 1)
  })
})
