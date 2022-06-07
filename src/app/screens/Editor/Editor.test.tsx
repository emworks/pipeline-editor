import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from 'src/app/store'
import Editor from 'src/app/screens/Editor'
import { BrowserRouter } from 'react-router-dom'

test('renders editor', () => {
  const { getByText } = render(
    <Provider store={store}>
      <BrowserRouter>
        <Editor />
      </BrowserRouter>
    </Provider>,
  )

  expect(getByText(/editor/i)).toBeInTheDocument()
})
