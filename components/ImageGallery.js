import LazyLoad from 'react-lazyload'
import Fade from 'react-reveal/Fade'

const ImageGallery = ({ images, ...props }) => {
  return (
    <div className="gallery">
      {images.map((image, idx) => (
        <LazyLoad once height={800} offset={512} key={idx}>
          <Fade bottom duration={640} distance="88px">
            <img className="gallery__img" src={image} alt="" />
          </Fade>
        </LazyLoad>
      ))}
    </div>
  )
}

export default ImageGallery
