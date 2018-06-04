import React from 'react'
import projects from '../data/projects.json' // local JSON file from contentful
import Markdown from 'markdown-to-jsx'
import Image from '../components/ProjectImage'
import styled from 'styled-components'
import { fadeInUp } from '../components/animations'

const Project = ({ project }) => (
  <Main>
    <Header>
      <Sidebar>
        <Title>{project.name}</Title>
        <Meta>
          <Term>Role:</Term>
          {project.role.map(r => <Def key={r}>{r}</Def>)}
          {project.agency != null && (
            <>
              <Term>Agency</Term>
              <Def>{project.agency}</Def>
            </>
          )}
        </Meta>
        {project.link && (
          <a href={project.link} className="out-link">
            Go See It
          </a>
        )}
      </Sidebar>
      <Intro>
        <Markdown>{project.intro}</Markdown>
      </Intro>
    </Header>
    <section>
      {project.images.map(i => <Image image={i} key={i.alt} />)}
    </section>
  </Main>
)

Project.getInitialProps = async ({ pathname, query }) => {
  let project = projects[`${query.slug}`] // grab the correct key:value pair
  return { project }
}

export default Project

const Main = styled.main`
  max-width: 1440px;
  margin: auto;
  padding: 10vh 8.333333333vw;
`

const Header = styled.header`
  margin-bottom: 14.22222222vh;
  align-items: baseline;

  @media (min-width: 960px) {
    display: grid;
    grid-template-columns: 1fr 3fr;
  }
`

const Sidebar = styled.aside`
  margin-bottom: 2rem;
  ${fadeInUp(600)};
`

const Title = styled.h1`
  font-family: halyard-display, system-ui;
  font-size: 2rem;
  line-height: 1.1;
  margin-bottom: 2rem;
`

const Meta = styled.dl`
  font-family: halyard-micro, monospace;
  font-size: 0.75rem;
  line-height: 1.8;
  color: #505050;
  margin-bottom: 2rem;
`

const Term = styled.dt``

const Def = styled.dd`
  margin-bottom: 1.25rem;
`

const Intro = styled.article`
  font-family: halyard-text, system-ui;
  font-size: 1.125rem;
  line-height: 1.666666667;
  max-width: 28em;
  justify-self: center;
  ${fadeInUp(800)};

  p + p {
    margin-top: 1.25rem;
  }
`
