/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'

import "./layout.css"
import pageStyles from './page.module.scss'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      desktop: file(relativePath: { eq: "background.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const imageData = data.desktop.childImageSharp.fluid

  return <main>
    <BackgroundImage
      Tag="section"
      className={pageStyles.backgroundContainer}
      fluid={imageData}
      backgroundColor={`#133969`}
    >
      {children}
    </BackgroundImage>
  </main>
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
