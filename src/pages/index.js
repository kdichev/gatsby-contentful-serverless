// @flow
import React from 'react'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from 'gatsby'
import Card from './../components/Card'
import CardTitle from './../components/CardTitle'
import Layout from '../components/layout'
import Img from 'gatsby-image'

const allContentfulDealsQuery = graphql`
  query {
    allContentfulDeals {
      edges {
        node {
          id
          title
          isBlue
          image {
            id
            fluid {
              base64
              tracedSVG
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
            }
          }
        }
      }
    }
  }
`

const ContentfulDeals = () => (
  <StaticQuery
    query={allContentfulDealsQuery}
    render={({ allContentfulDeals: { edges } }) =>
      edges.map(({ node: { isBlue, id, title, ...rest } }) => {
        console.log(rest)
        return (
          <Card isBlue={isBlue} key={id}>
            <Img fluid={rest.image.fluid} />
            <CardTitle isInverted={isBlue}>{title}</CardTitle>
          </Card>
        )
      })
    }
  />
)

const IndexPage = () => (
  <Layout>
    <Link to="/page-2/">Go to page 2</Link>
    <ContentfulDeals />
  </Layout>
)

export default IndexPage
