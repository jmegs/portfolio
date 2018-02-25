import React from 'react'
import styled from 'styled-components'

const AspectRatio = styled.div`
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

export default props => {
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
        frameBorder="0"
        allowFullScreen
      />
    )
  }
  return <AspectRatio>{embed}</AspectRatio>
}
