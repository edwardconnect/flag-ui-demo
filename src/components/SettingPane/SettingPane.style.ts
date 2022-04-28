import styled from 'styled-components'

const Wrapper = styled.div`
  &:not(:last-child) {
    margin-right: 12px;
  }
`

const Header = styled.h6`
  text-transform: uppercase;
  font-size: 20px;
  margin-bottom: 20px;
`

const ToggleWrapper = styled.div`
`

const TogglesWrapper = styled.div<{ isIndividual?: boolean }>`
  background: ${(props) => props.isIndividual ? 'none' : '#1C1C20'};
  border-radius: 5px;

  & ${ToggleWrapper} {
    background: ${(props) => props.isIndividual ? '#1C1C20' : 'none'};
    border-radius: 5px;
    margin-bottom:  ${(props) => props.isIndividual ? 12 : 0}px;
  }
`

const styles = {
  Wrapper,
  TogglesWrapper,
  Header,
  ToggleWrapper,
}

export default styles
