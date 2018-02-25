import { FETCH, NEW } from '../actions/scrobble'

const initialState = {
  scrobbles: []
}

export default (state = initialState, action) => {
  console.log('ACTION: ', action)
  switch (action.type) {
    case FETCH: {
      return Object.assign({}, state, {
        scrobbles: action.data.sort((a, b) => b.iso8601_at - a.iso8601_at)
      })
    }
    case NEW: {
      return Object.assign({}, state, {
        scrobbles: [action.data, ...state.scrobbles]
      })
    }
    default:
      return state
  }
}
