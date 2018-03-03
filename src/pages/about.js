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

const AboutPage = ({ data }) => {
  return <Container>
      <Nav dark />
      <Heading maxWidth={900}>
        John is an experience designer in NYC. <br />
        He’s interested in the collision between design and technology.<br />
        He’s constantly learning.<br />
        He definitely thinks designers should code.
      </Heading>
      <Image sizes={data.datoCmsHome.photo.sizes} maxWidth={720} />
      <Flex>
        <Heading ml="auto" maxWidth={720} mt={128}>
          This site is lovingly handcrafted with an entirely unnecessary technology stack including <a href="http://gatsbyjs.org">
            Gatsby
          </a>, <a href="http://styled-components.com">Styled Components</a> and <a href="https://github.com/jxnblk/styled-system">Styled System</a>, and <a href="http://datocms.com">DatoCMS</a>. It’s hosted on <a href="http://netlify.com">Netlify</a> and the source code is available on <a href="http://github.com/jmegs/portfolio">Github</a>.
        </Heading>
      </Flex>
    </Container>
}

export default AboutPage

export const query = graphql`
  query AboutQuery {
    datoCmsHome {
      photo {
        sizes(maxWidth: 720, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
    }
  }
`
