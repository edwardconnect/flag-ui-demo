import React, { useMemo } from 'react'

import ISettingToggleBase from '../../../models/ISettingToggleBase'
import NumbericSelect from '../../NumericSelect/NumbericSelect'
import Toggle from '../../Toggle/Toggle'
import Styles from './ToggleRow.style'


const ToggleRow: React.FC<ISettingToggleBase> = ({
  label,
  selectOptions,
  checked,
  onChange
}) => {
  const options = useMemo(() => {
    if (typeof selectOptions === 'number') {
      return Array.from(Array(selectOptions).keys()).map((it) => ({ label: it, value: it }))
    }

    if (selectOptions instanceof Array) {
      return selectOptions.map((it) => ({ label: it, value: it }))
    }

    return null
  }, [selectOptions])

  return (
    <Styles.ToggleWrapper data-testid={`toggle-row-${label}`}>
      <Styles.Label>{label}</Styles.Label>
      <Styles.ActionWrapper>
        {
          options && options.length > 0
          && (
            <NumbericSelect>
              {
                options.map(({ label, value }) => (
                  <option key={value} value={value}>{label}</option>
                ))
              }
            </NumbericSelect>
          )
        }
        <Toggle defaultChecked={checked} onChange={onChange} />
      </Styles.ActionWrapper>
    </Styles.ToggleWrapper>
  )

}
export default ToggleRow