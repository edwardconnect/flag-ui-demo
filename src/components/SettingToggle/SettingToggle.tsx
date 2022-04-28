import React, { useState } from 'react'

import Styles from './SettingToggle.style'
import ToggleRow from './ToggleRow/ToggleRow'
import ISettingToggle from '../../models/ISettingToggle';

const SettingToggle: React.FC<ISettingToggle> = ({
  label,
  children,
  selectOptions,
  checked,
}) => {
  const [expand, setExpand] = useState(checked)

  const clickParentToggleHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setExpand(event.target.checked)
  }

  return (
    <Styles.Wrapper>
      <ToggleRow
        label={label}
        onChange={clickParentToggleHandler}
        selectOptions={selectOptions}
        checked={checked}
      />
      {
        expand && children && children.length > 0 &&
        (
          <Styles.ChildrenWrapper data-testid="toggle-children-wrapper">
            {
              children && children.map((child, idx) => (
                <ToggleRow
                  {...child}
                  key={idx}
                />
              ))
            }
          </Styles.ChildrenWrapper>
        )
      }
    </Styles.Wrapper>
  )
}

export default SettingToggle
