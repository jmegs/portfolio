import React from 'react'
import Paragraph from './Paragraph'
import Image from './Image'
import Box from '../components/Box'
import Video from '../components/Video'
import AssetLink from '../components/AssetLink'
import getId from 'get-video-id'

const ContentFactory = props => {
  let { content } = props
  return (
    <div>
      {content.map((item, idx) => {
        if (item.__typename == 'DatoCmsText') {
          return (
            <Paragraph
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
            <Image
              key={idx}
              sizes={item.image.sizes}
              mx={[0, null, 64]}
              my={[32, null, 64]}
            />
          )
        } else if (item.__typename == 'DatoCmsVideo') {
          let { provider, url } = item.videoUrl
          let id = getId(url).id
          return (
            <Box key={idx} mx={[0, null, 64]} my={[32, null, 64]} height="100%">
              <Video id={id} provider={provider} />
            </Box>
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
