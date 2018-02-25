import React, { Component } from 'react'
import List from './scrobbles/List'
import ListItem from './scrobbles/ListItem'

export default class Main extends Component {
  state = {
    scrobbles: []
  }

  componentWillMount () {
    this.props.fetchHistory()
  }

  render () {
    const { scrobbles } = this.props
    return (
      <div className='wrapper'>
        <List>
          {
            scrobbles
              .map((s, i) =>
                <ListItem key={i} {...s} />
              )
          }
        </List>
      </div>
    )
  }
}
