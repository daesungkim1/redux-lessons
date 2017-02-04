import React from 'react'
import { Link } from 'react-router'

const FilterLink = ({ filter, currentFilter, children }) => (
  <Link
    to={filter === currentFilter ? '' : filter}
    activeStyle={{
      textDecoration: 'none',
      color: 'black'
    }}>
    {children}
  </Link>
)

export default FilterLink
