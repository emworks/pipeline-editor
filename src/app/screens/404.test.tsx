import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from 'src/app/store'
import NotFound from 'src/app/screens/404'
import { BrowserRouter } from 'react-router-dom'

test('renders not found page', () => {
  const { getByText } = render(
    <Provider store={store}>
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    </Provider>,
  )

  expect(getByText(/not found/i)).toBeInTheDocument()
})
