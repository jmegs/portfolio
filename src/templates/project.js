import React from 'react'
import { graphql } from 'gatsby'

import Img from 'gatsby-image'
import Layout from '../components/layout'
import SEO from '../components/seo'

const ProjectLayout = ({ data }) => {
  const {project} = data
  return (
    <Layout>
      <SEO pageTitle={project.title} pageDescription={project.summary} />
      <article className="project">
        <div className="project__intro">
          <header className="project__header">
            <h1 className="project__title">{project.title}</h1>
            <ul className="project__meta">
              <li>{project.what}</li>
              <li>{project.when}&nbsp;@&nbsp;{project.where}</li>
            </ul>
          </header>
          <div className="project__text" dangerouslySetInnerHTML={{__html: project.contentNode.childMarkdownRemark.html}}></div>
        </div>

        <section className="project__gallery">
          {project.gallery.map(item => (
          <figure className="gallery-item" key="item.alt">
            <Img className="gallery-item__img" fluid={item.fluid} />
          </figure>
          ))}
        </section>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query ProjectQuery($slug: String! ) {
    project: datoCmsProject(slug: { eq: $slug }) {
      title
      what
      when
      where
      summary
      contentNode {
        childMarkdownRemark {
          html
        }
      }
      gallery {
        alt
        fluid(maxWidth: 2560) {
          ...GatsbyDatoCmsFluid
        }
      }
    }
  }
`
export default ProjectLayout
