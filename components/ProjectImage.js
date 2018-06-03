import React from 'react'
import PropTypes from 'prop-types'

const ProjectImage = props => {
  const { alt, caption, url } = props.image
  return (
    <>
      <figure>
        <img src={url} alt={alt} />
        {caption && <figcaption>{caption}</figcaption>}
      </figure>
      <style jsx>{`
        figure {
          margin-bottom: 8.333333333vmax;
        }
        figcaption {
          font-family: halyard-micro, monospace;
          font-size: 0.75rem;
          color: #505050;
          text-align: center;
          margin-top: 1.25rem;
        }
      `}</style>
    </>
  )
}

ProjectImage.PropTypes = {
  image: PropTypes.shape({
    alt: PropTypes.string,
    caption: PropTypes.string,
    url: PropTypes.string
  })
}

export default ProjectImage
