import { getAllProjectIds, getProjectData } from "../../lib/projects"
import TitleBlock from "../../components/TitleBlock"
import { NextSeo } from "next-seo"

// TODO this is a god damn mess, componentize and clean up

function ProjectMedia({ item }) {
  return (
    <figure className="case__image grid">
      <img className="bg" src={item.src} alt="" />
      {item.caption && (
        <figcaption className="case__caption">{item.caption}</figcaption>
      )}
    </figure>
  )
}

function ProjectSection({ section }) {
  return (
    <section className="case__section divider">
      <div className="grid case__sectionIntro">
        <h2>{section.title}</h2>
        {section.blurb && <p>{section.blurb}</p>}
      </div>
      {section.content.map((item) => (
        <ProjectMedia item={item} key={item.src} />
      ))}
    </section>
  )
}

export default function Project({ project }) {
  return (
    <>
      <NextSeo
        title={`${project.title} • John Meguerian`}
        description={project.blurb}
        openGraph={{
          title: `${project.title} • John Meguerian`,
          description: project.blurb
        }}
      />
      <article className="case">
        <section className="case__intro grid">
          <TitleBlock title={project.title} subtitle={project.date} />
          <p className="heading-sm color-gray">{project.blurb}</p>
        </section>

        <img src={project.heroImage} alt="" className="case__hero bg" />

        <section className="case__summary grid">
          <div className="case__meta">
            <ul className="case__role divider">
              <h3 className="case__metaTitle">Role</h3>
              {project.summary.role.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
            <ul className="case__team divider">
              <h3 className="case__metaTitle">Team</h3>
              {project.summary.team.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>

          <div className="case__highlights prose divider">
            <h2>Challenge</h2>
            <p>{project.summary.challenge}</p>
            <h2>Approach</h2>
            <p>{project.summary.approach}</p>
            <h2>Outcomes</h2>
            <p>{project.summary.outcomes}</p>
          </div>
        </section>

        {project.sections.map((section) => (
          <ProjectSection section={section} key={section.title} />
        ))}
      </article>
    </>
  )
}

export async function getStaticPaths() {
  const paths = getAllProjectIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const project = getProjectData(params.id)
  return {
    props: {
      project
    }
  }
}
