import React from 'react'
import styled from 'styled-components'
import { space } from 'styled-system'

const Video = props => {
  let embed = null
  if (props.provider == 'vimeo') {
    embed = (
      <iframe
        src={`https://player.vimeo.com/video/${
          props.id
        }?title=0&byline=0&portrait=0`}
        frameBorder="0"
        webkitallowfullscreen
        mozallowfullscreen
        allowFullScreen
      />
    )
  } else {
    embed = (
      <iframe
        src={`https://www.youtube.com/embed/${props.id}?rel=0&amp;showinfo=0`}
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
    )
  }
  return <Container>{embed}</Container>
}

export default Video

const Container = styled.div`
  ${space};
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;

  iframe,
  object,
  embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`
