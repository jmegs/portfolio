import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ title, type, when, where }) => {
  return (
    <header className="u-box project-header">
      <h1 className="project-header__title">{title}</h1>
      <p className="project-header__meta">{type}</p>
      <p className="project-header__meta">
        {when}&nbsp;@&nbsp;{where}
      </p>
    </header>
  )
}

export default Header

Header.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  when: PropTypes.string.isRequired,
  where: PropTypes.string.isRequired
}
