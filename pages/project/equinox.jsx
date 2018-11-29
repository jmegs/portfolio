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
      <h1 className="big-serif">Equinox Trainer App</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ea
        libero neque. Tempora fuga ipsa, dicta optio provident sed sunt.
        Voluptate porro deserunt ullam harum ratione modi expedita sint illum!
      </p>
      <ImageGallery images={images} />
    </ProjectGrid>
  )
}

export default EquinoxProject
