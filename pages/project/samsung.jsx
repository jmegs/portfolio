import ProjectGrid from '../../components/ProjectGrid'
import ImageGallery from '../../components/ImageGallery'

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
          An interactive retail experience and custom analytics platform for
          Samsung TVs deployed at 1000+ stores nationwide. Doubled consumer
          understanding of product features while maintaining 98% uptime.
        </p>
        <small>
          <ul>
            Team
            <li>Kai Tier – Tech Lead</li>
            <li>Liz Watts – Project Manager</li>
            <li>Jodha Kandola – QA Lead</li>
            <li>James Dick – Content Lead</li>
          </ul>
        </small>
      </header>
      <ImageGallery images={images} />
    </ProjectGrid>
  )
}

export default SamsungProject
