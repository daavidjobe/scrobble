import ScrobbleApi from '../api/scrobble-api'
export const FETCH = 'FETCH'
export const NEW = 'NEW'

const zoneId = 'U291bmRab25lLCwxano5YXYzcjd5OC9Mb2NhdGlvbiwsMWptZjV1aTBrNWMvQWNjb3VudCwsMW5kbWR6bmF5Z3cv'

export const fetchHistory = (dispatch) => {
  const cb = appendScrobble.bind(null, dispatch)
  const api = new ScrobbleApi(zoneId, cb)
  return api.fetchHistory()
    .then(scrobbles => {
      api.subscribe(cb)
      return {
        type: FETCH,
        data: scrobbles
      }
    })
}

const appendScrobble = (dispatch, data) => {
  console.log('data, dispatch', data, dispatch)
  return dispatch({
    type: NEW,
    data
  })
}
