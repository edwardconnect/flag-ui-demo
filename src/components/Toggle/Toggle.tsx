import React from 'react'

import Styles from './Toggle.style'

const Toggle: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
  ...inputProps
}) => (
  <Styles.Wrapper data-testid="toggle">
    <Styles.Input {...inputProps} type="checkbox" data-testid="toggle-input" />
    <Styles.Span />
  </Styles.Wrapper>
)

export default Toggle
