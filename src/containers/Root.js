import React from 'react'
import { Provider } from 'react-redux'
import Main from './Main'

export default ({ store }) => (
  <Provider store={store}>
    <Main />
  </Provider>
)
