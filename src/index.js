import React from 'react'
import { render } from 'react-dom'
import Root from './containers/Root'
import { configureStore } from './store/configure-store.js'

import './scss/main.scss'

const store = configureStore()

render(
  <Root store={store} />,
  document.querySelector('#root')
)
