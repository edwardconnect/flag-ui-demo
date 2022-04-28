import React from 'react'

import ISettingToggleGroup from '../../models/ISettingToggleGroup'
import SettingToggle from '../SettingToggle/SettingToggle'
import Styles from './SettingPane.style'

const SettingPane: React.FC<ISettingToggleGroup> = ({
  header,
  type,
  settings,
}) => (
  <Styles.Wrapper>
    <Styles.Header>
      {header}
    </Styles.Header>
    <Styles.TogglesWrapper isIndividual={type === 'individual'}>
      {
        settings && settings.map((setting, idx) => (
          <Styles.ToggleWrapper key={idx}>
            <SettingToggle
              {...setting}
            />
          </Styles.ToggleWrapper>
        ))
      }
    </Styles.TogglesWrapper>
  </Styles.Wrapper>
)

export default SettingPane
