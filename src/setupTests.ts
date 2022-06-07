// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect'

import { init as initTranslation } from './i18n'
import en from './i18n/translations/en.json'

initTranslation({ en }, 'en', 'en')

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: jest.fn(),
      removeListener: jest.fn(),
    }
  }

// global.console.error = jest.fn()
