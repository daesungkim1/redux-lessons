import React from 'react';

const FilterLink = ({ filter, children, onClick, currentFilter }) => {
  if (filter === currentFilter) {
    return <span>{children}</span>
  }
  return (
    <a href="#"
      onClick={e => {
        e.preventDefault()
        onClick(filter)
      }
    }>
      {children}
    </a>
  )
}

export default FilterLink
