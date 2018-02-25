import React, { Component } from 'react'
import PlayButton from './PlayButton'

export default class SpotifyPlayer extends Component {
  state = {
    toggled: false
  }

  toggle = () => {
    this.setState({ toggled: !this.state.toggled })
  }

  render () {
    const { uri, width, height } = this.props
    const clazz = `spotify-player ${this.state.toggled ? 'spotify-player--open' : ''}`
    return (
      <div className={clazz}>
        <PlayButton width={30} color='#1dd155' onClick={this.toggle} />
        <iframe src={`https://open.spotify.com/embed?uri=${uri}&view=list&theme=white`}
          width={width}
          height={height}
          frameBorder='0'
          allow='encrypted-media'
          allowtransparency='true'
        />
      </div>
    )
  }
}
