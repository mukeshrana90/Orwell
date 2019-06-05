import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Blog from "../components/Blog"
import Contact from "../components/Contact"
import WhatWeDo from "../components/WhatWeDo"
import Philosophy from "../components/Philosophy";
import Team from "../components/Team";
import Brands from "../components/Brands";
import WebPlatform from "../components/WebPlatform";
import Banner from "../components/Banner";


class IndexPage extends Component {

  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <Banner />
        <WhatWeDo />
        <Philosophy />
        <Team />
        <WebPlatform />
        <Brands />
        <Blog />
        <Contact />
      </Layout>
    )
  }
}

export default IndexPage
