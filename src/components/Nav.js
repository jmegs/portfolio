import React from 'react'
import Mono from './Mono'
import Flex from './Flex'
import Link from 'gatsby-link'
import Icon from './Icon'

const Nav = () => (
  <Flex justifyContent="space-between" mx={[24, 40, 64]} mt={56}>
    <Link to="/">
      <Mono f={14}>&mdash; JM </Mono>
    </Link>
    <Flex justifyContent="space-between">
      <Icon name="info_outline" url="/page-2/" />
      <Icon name="twitter" url="http://twitter.com/jmegs" />
      <Icon name="instagram" url="http://instagram.com/johnmeguerian" />
      <Icon name="github" url="http://github.com/jmegs" />
    </Flex>
  </Flex>
)

export default Nav
