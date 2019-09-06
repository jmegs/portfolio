import React from 'react'
import { graphql } from 'gatsby'
import Teaser from '../components/teaser'

import Layout from '../components/layout'

const Index = ({ data }) => {
  return (
    <Layout>
      <section className="introduction">
        <h1>
          John Meguerian is a product designer based in NYC. Currently at{' '}
          <a href="https://squarespace.com">Squarespace</a>.
        </h1>
      </section>

      <section className="teasers">
        {data.allDatoCmsProject.edges.map(node => (
          <Teaser data={node.node} key={node.node.title} />
        ))}
      </section>
    </Layout>
  )
}

export default Index

export const query = graphql`
  query HomepageQuery {
    datoCmsHome {
      headingNode {
        childMarkdownRemark {
          html
        }
      }
    }
    allDatoCmsProject(sort: { fields: [position], order: ASC }) {
      edges {
        node {
          title
          slug
          featuredImage {
            alt
            fluid(maxWidth: 1680) {
              ...GatsbyDatoCmsFluid
            }
          }
          isExternal
          externalLink
          summaryNode {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
