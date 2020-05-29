import Link from "../components/Link"

export default function ProjectThumbnail({ project, idx }) {
  let index = idx + 1
  return (
    <li className="project-gallery__item" key={project.id}>
      <Link
        href="/work/[id]"
        as={`/work/${project.id}`}
        className="project-gallery__link"
      >
        <img
          src={project.thumbnail}
          alt={project.title}
          className="project-gallery__image bg"
        />
        <h3 className="project-gallery__title heading-md">
          <span className="color-text">
            {index < 9 ? `0${index} ` : `${index} `}
          </span>
          {project.title}
        </h3>
      </Link>
    </li>
  )
}
