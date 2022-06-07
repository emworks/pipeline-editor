import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import React from 'react'
import Button from './Button'

describe('Button', () => {
  test('default', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText(/click me/i)).toBeInTheDocument()
  })

  test('disabled', () => {
    render(<Button disabled>Disabled button</Button>)
    expect(screen.getByText(/disabled/i)).toBeDisabled()
  })
})
