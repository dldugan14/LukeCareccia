import React from "react"

import PageLayout from "../components/global/PageLayout"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="About" />
    <PageLayout title={"About ME"}>
      <p>
       I'm Luke Careccia and I like pretzels!
      </p>
    </PageLayout>
  </Layout>
)

export default About
