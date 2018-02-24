import { FETCH, NEW } from '../actions/scrobble'

const initialState = {
  scrobbles: []
}

export default (state = initialState, action) => {
  console.log('ACTION: ', action)
  switch (action.type) {
    case FETCH: {
      return Object.assign({}, state, {
        scrobbles: action.data
      })
    }
    case NEW: {
      return Object.assign({}, state, {
        scrobbles: [...state.scrobbles, action.data]
      })
    }
    default:
      return state
  }
}
