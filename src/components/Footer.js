import React from 'react'
import FilterLink from '../containers/FilterLink'

const Footer = ({ currentFilter }) => (
  <p>
    Show:
    {' '}
    <FilterLink
      filter='all'
      currentFilter={currentFilter}>
      All
    </FilterLink>
    {', '}
    <FilterLink
      filter='active'
      currentFilter={currentFilter}>
      Active
    </FilterLink>
    {', '}
    <FilterLink
      filter='completed'
      currentFilter={currentFilter}>
      Completed
    </FilterLink>
  </p>
)

export default Footer
