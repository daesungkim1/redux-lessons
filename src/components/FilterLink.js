import React from 'react';

const FilterLink = ({ filter, children, currentFilter, store }) => {
  if (filter === currentFilter) {
    return <span>{children}</span>
  }
  return (
    <a href="#"
      onClick={ e => {
        e.preventDefault()
        store.dispatch({
          type: 'SET_VISIBILITY_FILTER',
          filter
        })
      }}>
      {children}
    </a>
  )
}

export default FilterLink
