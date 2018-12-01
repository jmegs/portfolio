import Link from 'next/link'
import AnimatedAnchor from './AnimatedAnchor'

const ProjectLink = ({ href, label, date, ...props }) => {
  return (
    <Link href={href} prefetch>
      <AnimatedAnchor>
        <span>{label}</span>
        <date>{date}</date>
        <style jsx>
          {`
            a {
              display: table;
              position: relative;
              color: inherit;
              text-decoration: none;
            }

            date {
              margin-left: 12px;
              color: #545454;

              font-family: Poppins, system-ui;
            }
          `}
        </style>
      </AnimatedAnchor>
    </Link>
  )
}

const Projects = () => (
  <nav className="big-serif">
    <ProjectLink href="/project/equinox" label="Equinox" date="2018" />
    <ProjectLink href="/project/samsung" label="Samsung" date="2017" />
    <style jsx>{`
      nav {
        margin-top: 50px;
      }
    `}</style>
  </nav>
)

export default Projects
