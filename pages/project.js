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
          <Term>Results:</Term>
          {project.results.map(r => <Def key={r}>{r}</Def>)}
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

// Where the magic happens
//=============================================
Project.getInitialProps = async ({ pathname, query }) => {
  let project = projects[`${query.slug}`] // grab the correct key:value pair
  return { project }
}

export default Project

// Styles
//=============================================
const Main = styled.main`
  max-width: 1440px;
  margin: 10vh auto 10vh auto;
  @media (max-width: 960px) {
    padding: 0 4vw;
  }
`

const Header = styled.header`
  margin-bottom: 14.22222222vh;
  align-items: baseline;

  @media (min-width: 960px) {
    display: grid;
    grid-template-columns: 300px minmax(420px, 1fr);
    grid-column-gap: 5.5rem;
    padding: 0 5.5rem;
  }
`

const Sidebar = styled.aside`
  margin-bottom: 2rem;
  ${fadeInUp(600)};
`

const Title = styled.h1`
  font-family: halyard-display, system-ui;
  font-size: 3.5rem;
  line-height: 1.1;
  margin-bottom: 2rem;
`

const Meta = styled.dl`
  font-family: halyard-text, system-ui;
  font-size: 1rem;
  color: #0d0d0d;
  margin-bottom: 2rem;
`

const Term = styled.dt`
  font-weight: bold;
  :not(:first-child) {
    margin-top: 1.5rem;
  }
`

const Def = styled.dd`
  margin-bottom: 0.25em;
`

const Intro = styled.article`
  font-family: halyard-text, system-ui;
  font-size: 1.125rem;
  line-height: 1.666666667;
  margin-top: calc(3.5rem + 1em);
  max-width: 28em;
  justify-self: end;
  ${fadeInUp(800)};

  p + p {
    margin-top: 1.25rem;
  }
`
