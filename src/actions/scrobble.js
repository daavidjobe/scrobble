import ScrobbleApi from '../api/scrobble-api'
export const FETCH = 'FETCH'
export const NEW = 'NEW'

const zoneId = 'U291bmRab25lLCwxano5YXYzcjd5OC9Mb2NhdGlvbiwsMWptZjV1aTBrNWMvQWNjb3VudCwsMW5kbWR6bmF5Z3cv'

export const fetchHistory = (cb) => {
  const api = new ScrobbleApi(zoneId, cb)
  return api.fetchHistory()
    .then(scrobbles => {
      api.subscribe(appendScrobble)
      return {
        type: FETCH,
        data: scrobbles
      }
    })
}

const appendScrobble = (data) => ({
  type: NEW,
  data
})
