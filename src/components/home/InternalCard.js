import React from 'react'
import { Link } from 'gatsby'

const InternalCard = ({ title, slug, to }) => {
  return (
    <Link className="u-box internal-card" to={to}>
      <h2 className="h1 internal-card__title">{title}</h2>
      <span className="h1 internal-card__slug">{slug}</span>
    </Link>
  )
}

export default InternalCard
