import React from 'react'
import Paragraph from './Paragraph'
import Image from './Image'
import Box from '../components/Box'
import Video from '../components/Video'
import getVideoId from 'get-video-id'

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
          let id = getVideoId(item.videoUrl.url).id
          console.log(id)
          return (
            <Box mx={[0, null, 64]} my={[32, null, 64]} height="100%">
              <Video key={idx} id={id} provider={item.videoUrl.provider} />
            </Box>
          )
        } else {
          return null
        }
      })}
    </div>
  )
}

export default ContentFactory
