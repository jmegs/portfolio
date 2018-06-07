import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ProjectImage = props => {
  const { alt, caption, url } = props.image
  return (
    <Figure>
      <img src={url} alt={alt} />
      {caption && <Caption>{caption}</Caption>}
    </Figure>
  )
}

ProjectImage.propTypes = {
  image: PropTypes.shape({
    alt: PropTypes.string,
    caption: PropTypes.string,
    url: PropTypes.string
  })
}

export default ProjectImage

const Figure = styled.figure`
  margin-bottom: 5.5vmax;
`

const Caption = styled.figcaption`
  font-family: halyard-micro, monospace;
  font-size: 0.75rem;
  color: #505050;
  text-align: center;
  margin-top: 1.25rem;
`
