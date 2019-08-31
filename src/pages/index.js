import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Intro from '../components/home/Intro'

const Index = ({ data }) => {
  return (
    <Layout>
      <Intro />
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
