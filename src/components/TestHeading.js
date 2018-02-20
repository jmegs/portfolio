import React from 'react'
import Text from './Text'

const Heading = props => (
  <Text f={[24, 32, 24, 32]} mx={[24, 40, 64]} mt={[48, 72]} {...props}>
    {props.children}
  </Text>
)

export default Heading
