import Link from 'next/link'

const ProjectLink = ({ href, label, date, ...props }) => {
  return (
    <Link href={href} prefetch>
      <a>
        <span>{label}</span>
        <date>{date}</date>
        <style jsx>
          {`
            a {
              display: table;
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
      </a>
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
