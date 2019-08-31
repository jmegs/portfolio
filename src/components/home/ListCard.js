import React from 'react'
import PropTypes from 'prop-types'

const ListCard = ({ title, items }) => {
  return (
    <div className="u-box list-card">
      <h2 className="h1 list-card__title">{title}</h2>
      {items.map((i, idx) => (
        <a href={i.url} className="h1 list-card__item" key={idx}>
          →&nbsp;{i.name}
        </a>
      ))}
    </div>
  )
}

export default ListCard

ListCard.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  )
}
