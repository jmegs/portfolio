import { getProjectsMeta } from "../lib/projects"
import { getOpenSourceProjects } from "../lib/openSource"

import TitleBlock from "../components/TitleBlock"
import ProjectThumbnail from "../components/ProjectThumbnail"
import OpenSourceItem from "../components/OpenSourceItem"

export default function HomePage({ allProjects, allOpenSource }) {
  return (
    <>
      <TitleBlock
        title="John Meguerian"
        subtitle="Product Designer & Developer"
      />

      <section className="projects-section divider">
        <h2 className="heading-lg">Select Work</h2>
        <ul className="project-gallery grid">
          {allProjects.map((project, idx) => (
            <ProjectThumbnail project={project} key={project.id} idx={idx} />
          ))}
        </ul>
      </section>

      <section className="open-source-section divider grid">
        <h2 className="heading-lg">Open Source Projects</h2>
        <ul className="open-source-list">
          {allOpenSource.map(item => (
            <OpenSourceItem item={item} key={item.title}/>
          ))}
        </ul>
      </section>
    </>
  )
}

export async function getStaticProps() {
  const allProjects = getProjectsMeta()
  const allOpenSource = getOpenSourceProjects()
  return {
    props: {
      allProjects,
      allOpenSource
    }
  }
}
