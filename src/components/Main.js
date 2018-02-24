import React, { Component } from 'react'

export default class Main extends Component {
  state = {
    scrobbles: []
  }

  componentWillMount () {
    this.props.fetchHistory()
  }

  renderRows = () => {
    return this.props.scrobbles
      .map(scrobble => <div>scrobble</div>)
  }

  render () {
    return (
      <div className='wrapper'>
        {this.renderRows()}
      </div>
    )
  }
}
