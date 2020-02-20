import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Brand from '../images/brand.inline.svg'
import SCA from '../images/sca.inline.svg'

import pageStyles from '../components/page.module.scss'

const IndexPage = () => (
  <Layout>
    <SEO title="Welcome" />
    <Brand className={pageStyles.brand} />
    <footer className={pageStyles.footer}>
      <div className={pageStyles.scaCallout}>
        <SCA />
        <p>Proud members of the Specialty Coffee Association</p>
      </div>
      <span className={pageStyles.copyright}>© {new Date().getFullYear()}</span>
    </footer>
  </Layout>
)

export default IndexPage
