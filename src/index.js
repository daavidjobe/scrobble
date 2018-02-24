import React from 'react'
import { render } from 'react-dom'
import Root from './containers/Root'
import { configureStore } from './store/configure-store.js'

const store = configureStore()

render(
  <Root store={store} />,
  document.querySelector('#root')
)
