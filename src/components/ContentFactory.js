import React from 'react'
import styled from 'styled-components'
import { Body } from './TextComponents'
import Image from './Image'
import Video from '../components/Video'
import AssetLink from '../components/AssetLink'
import getId from 'get-video-id'

const VideoContainer = styled.div`
  height: 100%;
`

const ContentFactory = props => {
  let { content } = props
  return (
    <div>
      {content.map((item, idx) => {
        if (item.__typename == 'DatoCmsText') {
          return (
            <Body
              key={idx}
              children={item.content}
              maxWidth={512}
              mx="auto"
              mt={[32, null, 64]}
              mb={[40, null, 80]}
            />
          )
        } else if (item.__typename == 'DatoCmsImage') {
          return (
            <Image key={idx} sizes={item.image.sizes} my={[32, null, 64]} />
          )
        } else if (item.__typename == 'DatoCmsVideo') {
          let { provider, url } = item.videoUrl
          let id = getId(url).id
          return (
            <VideoContainer key={idx}>
              <Video id={id} provider={provider} />
            </VideoContainer>
          )
        } else if (item.__typename == 'DatoCmsLink') {
          return <AssetLink url={item.url} label={item.label} />
        } else {
          return null
        }
      })}
    </div>
  )
}

export default ContentFactory
