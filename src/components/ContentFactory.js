import React from 'react'
import styled from 'styled-components'
import { Body } from './TextComponents'
import Image from './Image'
import Video from './Video'
import AssetLink from './AssetLink'
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
          let html = item.contentNode.childMarkdownRemark.html
          console.log(`content: ${item.content}`)
          return (
            <Body
              key={idx}
              // children={item.content}
              dangerouslySetInnerHTML={{ __html: html }}
              maxWidth={512}
              mx="auto"
              mt={[64, null, 128]}
              mb={[80, null, 160]}
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
