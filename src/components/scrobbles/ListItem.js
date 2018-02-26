import React from 'react'
import moment from 'moment'
import Image from '../ui/Image'
import SpotifyPlayer from '../ui/SpotifyPlayer'
import ScrobbleApi from '../../api/scrobble-api'

export default ({ artists, image_url, song_name, iso8601_at, uri, duration_ms, channel_name }) => {
  const artistsStr = artists.map(a => a.name).join(', ')
  return (
    <li className='scrobbles-item'>
      <div className="scrobbles-item__image-wrapper">
        <Image src={image_url} throttle={50} />
      </div>
      <div className="scrobbles-item__info">
        <p className="scrobbles-item__song">{song_name}</p>
        <p className="scrobbles-item__artist">{artistsStr}</p>
        <p className="scrobbles-item__played">
          {
            moment(ScrobbleApi.playDate({ iso8601_at })).fromNow()
          }
        </p>
        <p className="scrobbles-item__channel">{channel_name}</p>
        <SpotifyPlayer uri={uri} width={220} height={80} />
      </div>
    </li>
  )
}
