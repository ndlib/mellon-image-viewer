import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Hesburgh IIIF Viewers" />
    <h1>Hesburgh IIIF Viewers</h1>
    <p><a href="/mirador">Go To the default viwer</a></p>
    <p><a href="/marble">Go To the marble viwer</a></p>
  </Layout>
)

export default IndexPage
