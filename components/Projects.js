import Link from 'next/link'

const ProjectLink = ({ href, label, date, ...props }) => {
  return (
    <Link href={href} prefetch>
      <a className="animated-anchor project-link">
        <span className="project-link__label">{label}</span>
        <span className="project-link__date">{date}</span>
      </a>
    </Link>
  )
}

const Projects = () => (
  <nav className="big-serif project-list">
    <ProjectLink href="/project/equinox" label="Equinox" date="2018" />
    <ProjectLink href="/project/samsung" label="Samsung" date="2017" />
  </nav>
)

export default Projects
