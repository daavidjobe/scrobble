import { connect } from 'react-redux'
import { fetchHistory } from '../actions/scrobble'
import Main from '../components/Main'

const mapStateToProps = ({ scrobbles }) => scrobbles

const bindActionsToDispatch = dispatch => ({
  fetchHistory: () => fetchHistory().then(dispatch)
})

export default connect(mapStateToProps, bindActionsToDispatch)(Main)
