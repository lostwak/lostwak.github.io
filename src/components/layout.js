/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

import pantz from '../images/pantz.png'

import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header/>
      <div 
      >
        <main>{children}</main>
      </div>
    <footer
      style={{
        fontSize: `var(--font-sm)`,
        textAlign: `center`,
      }}
    >
    <img
      className="footer-img"
      alt="비챤"
      style={{ margin: 0 }}
      src={pantz}
    />
    <br/>
      {new Date().getFullYear()} &middot; Team.Smileleaf
      <a href="https://cafe.naver.com/steamindiegame/">WAKMULWON</a>
    </footer>
    </>
  )
}

export default Layout
