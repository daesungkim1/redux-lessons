import { connect } from 'react-redux'
import Link from '../components/Link'
import { setVisibilityFilter } from '../actions'

const mapStateToPorps = (state, ownProps) => {
  return {
    active:
      ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

const FilterLink = connect(
  mapStateToPorps,
  mapDispatchToProps
)(Link)

export default FilterLink
