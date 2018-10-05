import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'

const metaTags = [
  { name: 'description', content: 'Sample' },
  { name: 'keywords', content: 'sample, something' },
]

const layoutWrapperStyles = {
  margin: '0 auto',
  maxWidth: 960,
  padding: '0px 1.0875rem 1.45rem',
  paddingTop: 0,
}

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: { title },
      },
    }) => (
      <>
        <Helmet title={title} meta={metaTags}>
          <html lang="en" />
        </Helmet>
        <Header siteTitle={title} />
        <div style={layoutWrapperStyles}>{children}</div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
