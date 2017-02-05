import React from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router'

// withRouter is HOC function
const FilterLink = withRouter(({ filter, children, params }) => (
  <Link
    to={filter === params.filter ? '' : filter}
    activeStyle={{
      textDecoration: 'none',
      color: 'black'
    }}>
    {children}
  </Link>
))

export default FilterLink
