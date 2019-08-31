import React from 'react'
import { useSiteMeta } from '../hooks/useSiteMeta'

const Footer = () => {
  const { social } = useSiteMeta()

  return (
    <footer className="u-box social">
      {social.map(service => (
        <a className="social__link" href={service.url} key={service.name}>
          {service.name}
        </a>
      ))}
    </footer>
  )
}

export default Footer
