import {buildConfig} from "./index.js"

describe("buildConfig", () => {
  it("sets the manifest when the location has a manifest", () => {
    const location = {search: '?manifest=manifest'}
    const config = buildConfig("id", location, "theme")
    expect(config.windows[0].manifestId).toEqual("manifest")
  })

  it("sets emtpry string the location does not have a manifest", () => {
    const location = {search: '?notManifest=manifest'}
    const config = buildConfig("id", location, "theme")
    expect(config.windows[0].manifestId).toEqual(undefined)
  })

  it("sets the id", () => {
    const location = {search: '?notManifest=manifest'}
    const config = buildConfig("id", location, "theme")
    expect(config.id).toEqual("id")
  })

  it("sets the theme color", () => {
    const location = {search: '?notManifest=manifest'}
    const config = buildConfig("id", location, "theme")
    expect(config.themes.light.palette.primary.main).toEqual("theme")
  })

  it("defaults the theme color if it is not set", () => {
    const location = {search: '?notManifest=manifest'}
    const config = buildConfig("id", location)
    expect(config.themes.light.palette.primary.main).toEqual('#blue')
  })

  it("sets the hideWindowTitle to hidden", () => {
    const location = {search: '?manifest=manifest&title=false'}
    const config = buildConfig("id", location, "theme")
    expect(config.window.hideWindowTitle).toEqual(true)
  })

  it("defaults the hideWindowTitle to visible", () => {
    const location = {search: '?manifest=manifest'}
    const config = buildConfig("id", location, "theme")
    expect(config.window.hideWindowTitle).toEqual(false)
  })

  it("sets the hideWindowTitle to visible", () => {
    const location = {search: '?manifest=manifest&title=true'}
    const config = buildConfig("id", location, "theme")
    expect(config.window.hideWindowTitle).toEqual(false)
  })

  it("sets the sideBarOpenByDefault to closed", () => {
    const location = {search: '?manifest=manifest&sidebar=true'}
    const config = buildConfig("id", location, "theme")
    expect(config.window.sideBarOpenByDefault).toEqual(true)
  })

  it("defaults the sideBarOpenByDefault to closed", () => {
    const location = {search: '?manifest=manifest'}
    const config = buildConfig("id", location, "theme")
    expect(config.window.sideBarOpenByDefault).toEqual(false)
  })

  it("sets the sideBarOpenByDefault to open", () => {
    const location = {search: '?manifest=manifest&sidebar=false'}
    const config = buildConfig("id", location, "theme")
    expect(config.window.sideBarOpenByDefault).toEqual(false)
  })

  it("sets the allowFullscreen to true", () => {
    const location = {search: '?manifest=manifest&fullscreen=true'}
    const config = buildConfig("id", location, "theme")
    expect(config.window.allowFullscreen).toEqual(true)
  })

  it("defaults the allowFullscreen to true", () => {
    const location = {search: '?manifest=manifest'}
    const config = buildConfig("id", location, "theme")
    expect(config.window.allowFullscreen).toEqual(true)
  })

  it("sets the allowFullscreen to false", () => {
    const location = {search: '?manifest=manifest&fullscreen=false'}
    const config = buildConfig("id", location, "theme")
    expect(config.window.allowFullscreen).toEqual(false)
  })

  it("sets the thumbnailNavigationPosition to far-bottom", () => {
    const location = {search: '?manifest=manifest&thumbnails=true'}
    const config = buildConfig("id", location, "theme")
    expect(config.windows[0].thumbnailNavigationPosition).toEqual('far-bottom')
  })

  it("defaults the thumbnailNavigationPosition to off", () => {
    const location = {search: '?manifest=manifest'}
    const config = buildConfig("id", location, "theme")
    expect(config.windows[0].thumbnailNavigationPosition).toEqual('off')
  })

  it("sets the thumbnailNavigationPosition to off", () => {
    const location = {search: '?manifest=manifest&thumbnails=false'}
    const config = buildConfig("id", location, "theme")
    expect(config.windows[0].thumbnailNavigationPosition).toEqual('off')
  })

  it("sets the canvasIndex to passed in int", () => {
    const location = {search: '?manifest=manifest&cv=9'}
    const config = buildConfig("id", location, "theme")
    expect(config.windows[0].canvasIndex).toEqual(9)
  })

  it("defaults the cavas to 0", () => {
    const location = {search: '?manifest=manifest'}
    const config = buildConfig("id", location, "theme")
    expect(config.windows[0].canvasIndex).toEqual(0)
  })

  it("sets the canvasIndex to 0 when not an int", () => {
    const location = {search: '?manifest=manifest&cv=notanumber'}
    const config = buildConfig("id", location, "theme")
    expect(config.windows[0].canvasIndex).toEqual(0)
  })

  it("sets the viewerView to passed in value", () => {
    const location = {search: '?manifest=manifest&view=view'}
    const config = buildConfig("id", location, "theme")
    expect(config.windows[0].view).toEqual('view')
  })

  it("defaults the viewerView to default", () => {
    const location = {search: '?manifest=manifest'}
    const config = buildConfig("id", location, "theme")
    expect(config.windows[0].view).toEqual('default')
  })

})
