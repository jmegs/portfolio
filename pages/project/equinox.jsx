import ProjectGrid from '../../components/ProjectGrid'
import ImageGallery from '../../components/ImageGallery'

const images = [
  '/static/equinox/eqx-home.jpg',
  '/static/equinox/eqx-list.jpg',
  '/static/equinox/eqx-cal.jpg',
  '/static/equinox/eqx-mobile.jpg',
  '/static/equinox/eqx-cards-small.jpg',
  '/static/equinox/eqx-card-expanded.jpg',
  '/static/equinox/eqx-goals.jpg'
]

const EquinoxProject = props => {
  return (
    <ProjectGrid title="Equinox">
      <header>
        <h1 className="big-serif">Equinox Trainer App</h1>
        <p>
          A personal training management platform, getting Equinox trainers off
          of spreadsheets and onto a custom built progressive web app where they
          can set schedules, build fitness programs, and set and track client
          goals.
        </p>
        <small>
          <ul>
            Team
            <li>Ben Downard – Design Director</li>
            <li>Monica Jones – Product Manager</li>
            <li>Frank Yandolino – Tech Lead</li>
          </ul>
        </small>
      </header>
      <ImageGallery images={images} />
    </ProjectGrid>
  )
}

export default EquinoxProject
