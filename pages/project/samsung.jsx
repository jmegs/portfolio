import ProjectGrid from '../../components/ProjectGrid'
import ImageGallery from '../../components/ImageGallery'
import Button from '../../components/Button'

const images = [
  '/static/samsung/see-home.jpg',
  '/static/samsung/see-stores.jpg',
  '/static/samsung/see-analytics.jpg',
  '/static/samsung/see-content.jpg',
  '/static/samsung/see-touchscreen-home.jpg',
  '/static/samsung/see-touchscreen-story.jpg'
]

const SamsungProject = props => {
  return (
    <ProjectGrid title="Samsung">
      <header>
        <h1 className="big-serif">Samsung Entertainment Experience</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ea
          libero neque. Tempora fuga ipsa, dicta optio provident sed sunt.
          Voluptate porro deserunt ullam harum ratione modi expedita sint illum!
        </p>
        <small>
          <ul>
            Team
            <li>Ben Downard – Design Director</li>
            <li>Monica Jones – Product Manager</li>
            <li>Frank Yandolink – Tech Lead</li>
          </ul>
        </small>
        <Button href="http://google.com">Visit</Button>
        <Button href="http://google.com">Other Button</Button>
      </header>
      <ImageGallery images={images} />
    </ProjectGrid>
  )
}

export default SamsungProject
