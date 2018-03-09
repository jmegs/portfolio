import React from 'react'
import styled from 'styled-components'
import Container from '../components/Container'
import Nav from '../components/Nav'
import { Heading } from '../components/TextComponents'
import Image from '../components/Image'

const Flex = styled.div`
  display: flex;
  width: 100%;

  a {
    text-decoration: underline;
  }
`
const Words = Heading.extend`
  p + p {
    margin-top: 32px;
  }
`
const AboutPage = ({ data }) => {
  let { blurb, image, tech } = data.datoCmsAbout
  return (
    <Container>
      <Nav dark />
      <Words
        maxWidth={900}
        dangerouslySetInnerHTML={{ __html: blurb.childMarkdownRemark.html }}
      />

      <Image sizes={image.sizes} maxWidth={720} />
      <Flex>
        <Words
          ml="auto"
          maxWidth={720}
          mt={128}
          dangerouslySetInnerHTML={{ __html: tech.childMarkdownRemark.html }}
        />
      </Flex>
    </Container>
  )
}

export default AboutPage

export const query = graphql`
  query AboutQuery {
    datoCmsAbout {
      blurb: blurbNode {
        childMarkdownRemark {
          html
        }
      }
      tech: techBlurbNode {
        childMarkdownRemark {
          html
        }
      }
      image {
        sizes(maxWidth: 720, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
    }
  }
`
