import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import SettingToggle from "./SettingToggle"

it('Should show toggle children success', async () => {
  const childLabel = "test children row"
  render(
    <SettingToggle
      label="test label"
      checked={false}
      children={
        [
          { label: childLabel }
        ]
      }
    />
  )

  const toggleEl = screen.getByTestId('toggle')
  act(() => {
    toggleEl.click()
  })
  screen.getByText(childLabel)
})
