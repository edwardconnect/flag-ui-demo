import { render, screen } from '@testing-library/react'
import React from 'react'
import Toggle from './Toggle'

it('Should toggle success', () => {
  render(<Toggle/>)
  const toggleEl = screen.getByTestId('toggle')
  const toggleInput = screen.getByTestId('toggle-input') as HTMLInputElement
  expect(toggleInput.checked).toBe(false)
  toggleEl.click()
  expect(toggleInput.checked).toBe(true)
})