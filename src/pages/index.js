import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Grid from '../components/Grid'
import Intro from '../components/home/Intro'
import InternalCard from '../components/home/InternalCard';

const Index = ({ data }) => {
  return (
    <Layout>
      <Intro />
      <Grid type="split">
        <InternalCard title="Equinox Personal Training" slug="/equinox" to="/" />
        <InternalCard title="Samsung Entertainment Experience" slug="/samsung" to="/" />
      </Grid>
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
