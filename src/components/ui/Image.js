import React, { Component } from 'react'
import Spinner from './Spinner'

export default class Image extends Component {
  state = {
    isLoaded: false
  }

  handleLoad = () => {
    setTimeout(() =>
      this.setState({ isLoaded: true }), this.props.throttle)
  }

  render () {
    const { src, alt = '' } = this.props
    const { isLoaded } = this.state
    const clazz = `image ${isLoaded ? 'image--loaded' : ''}`
    return (
      <div className={clazz}>
        {
          isLoaded === false && <Spinner
            width={140} color='#fff' strokeWidth={2}
          />
        }
        <img src={src}
          alt={alt}
          onLoad={this.handleLoad}
        />
      </div>
    )
  }
}
