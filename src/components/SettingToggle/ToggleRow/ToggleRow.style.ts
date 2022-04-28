import styled from 'styled-components'

const ToggleWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  /* min-width: 300px; */
  width: 100%;
  padding: 24px 20px;
`

const Label = styled.label`
  text-transform: uppercase; 
  font-size: 14px;
`

const ActionWrapper = styled.div`
  align-items: center;
  display: flex;

  & > *:last-child {
    margin-left: 12px;
  }
`

const styles = {
  ToggleWrapper,
  Label,
  ActionWrapper
}

export default styles
