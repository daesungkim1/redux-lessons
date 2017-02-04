import { connect } from 'react-redux'
import Link from '../components/Link'

const mapStateToPorps = (state, ownProps) => {
  return {
    active:
      ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
        dispatch({
        type: 'SET_VISIBILITY_FILTER',
        filter: ownProps.filter
      })
    }
  }
}

const FilterLink = connect(
  mapStateToPorps,
  mapDispatchToProps
)(Link)

export default FilterLink
