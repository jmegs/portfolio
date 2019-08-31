import React from 'react'

const Grid = ({ type, children }) => {
  return <div className={`u-grid u-grid--${type}`}>{children}</div>
}

export default Grid
