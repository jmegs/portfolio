import LazyLoad from 'react-lazyload'
import Fade from 'react-reveal/Fade'

const ImageGallery = ({ images, ...props }) => {
  return (
    <div>
      {images.map((image, idx) => (
        <LazyLoad once height={800} offset={512} key={idx}>
          <Fade bottom duration={640} distance="88px">
            <img src={image} alt="" />
          </Fade>
        </LazyLoad>
      ))}
      <style jsx>
        {`
          div {
            grid-column: 1 / -1;
          }

          img {
            margin-bottom: 3vmax;
          }
        `}
      </style>
    </div>
  )
}

export default ImageGallery
