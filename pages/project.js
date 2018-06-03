import React from 'react'
import projects from '../data/projects.json' // local JSON file from contentful
import Markdown from 'markdown-to-jsx'
import Image from '../components/ProjectImage'

const Project = ({ project }) => (
  <>
    <main>
      <header>
        <aside>
          <h1>{project.name}</h1>
          <dl>
            <dt>Role:</dt>
            {project.role.map(r => <dd key={r}>{r}</dd>)}
            {project.agency != null && (
              <>
                <dt>Agency</dt>
                <dd>{project.agency}</dd>
              </>
            )}
          </dl>
          {project.link && (
            <a href={project.link} className="out-link">
              Go See It
            </a>
          )}
        </aside>
        <article>
          <Markdown>{project.intro}</Markdown>
        </article>
      </header>
      <section className="images">
        {project.images.map(i => <Image image={i} key={i.alt} />)}
      </section>
    </main>
    <style jsx>{`
      main {
        max-width: 1440px;
        margin: auto;
        padding: 10vh 8.333333333vw;
      }

      header {
        margin-bottom: 14.22222222vh;
      }

      aside {
        margin-bottom: 2rem;
      }

      h1 {
        font-family: halyard-display, system-ui;
        font-size: 2rem;
        line-height: 1.1;
        margin-bottom: 2rem;
      }

      dl {
        font-family: halyard-micro, monospace;
        font-size: 0.75rem;
        line-height: 1.8;
        color: #505050;
        margin-bottom: 2rem;
      }

      dd {
        margin-bottom: 1.25rem;
      }

      article {
        font-family: halyard-text, system-ui;
        font-size: 1.125rem;
        line-height: 1.666666667;
        max-width: 28em;
        justify-self: center;
      }

      article p + p {
        margin-top: 27px;
      }

      @media (min-width: 960px) {
        header {
          display: grid;
          grid-template-columns: 1fr 3fr;
        }
      }
    `}</style>
  </>
)

Project.getInitialProps = async ({ pathname, query }) => {
  let project = projects[`${query.slug}`] // grab the correct key:value pair
  return { project }
}

export default Project
