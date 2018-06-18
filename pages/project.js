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
          <Button href={project.link} className="out-link">
            Go See It
          </Button>
        )}
        {project.case && (
          <Button href={project.case} className="out-link">
            Watch Case Study
          </Button>
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
  padding: 0 4vw;
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
  font-size: 3.5rem;
  line-height: 1.25;
  margin-bottom: 2rem;
`

const Meta = styled.dl`
  font-size: 1rem;
  line-height: 1.75;
  color: #0d0d0d;
  margin-bottom: 2rem;
`

const Term = styled.dt`
  font-weight: bold;
  margin-bottom: 0.5em;
  :not(:first-child) {
    margin-top: 1.5rem;
  }
`

const Def = styled.dd`
  margin-bottom: 0.5em;
`

const Button = styled.a`
  display: inline-block;
  background: #f1f1f1;
  padding: 16px 24px;
  border-radius: 4px;
  margin-right: auto;
  margin-bottom: 1rem;
  text-align: center;
  text-decoration: none;
  color: inherit;
  transition: background 250ms ease;

  &:hover {
    background: rgba(241, 241, 241, 0.6);
  }
`

const Intro = styled.article`
  font-size: 1.125rem;
  line-height: 1.75;
  /* margin-top: calc(4rem + 1em); */
  max-width: 28em;
  justify-self: end;
  ${fadeInUp(800)};

  p + p {
    margin-top: 1.25rem;
  }
`
