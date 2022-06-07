import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { store } from './app/store'
import { Provider } from 'react-redux'

import { init as initTranslation } from './i18n'
import en from './i18n/translations/en.json'

initTranslation({ en }, 'en', 'en')

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(
  // TODO: investigate how to fix https://andreasheissenberger.medium.com/react-components-render-twice-any-way-to-fix-this-91cf23961625
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>,
  // </React.StrictMode>,
)
