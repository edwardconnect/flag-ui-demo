import styled from 'styled-components'

const Wrapper = styled.label`
  position: relative;
  display: inline-block;
  width: 46px;
  height: 24px;
`

const Input = styled.input<React.InputHTMLAttributes<HTMLInputElement>>`
  opacity: 0;
  width: 0;
  height: 0;
`

const Span = styled.span`
  border-radius: 34px;
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;

  &:before {
    border-radius: 50%;
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }

  ${Input}:checked + & {
    background-color: #61A4FA;
  }

  ${Input}:focus + & {
    box-shadow: 0 0 1px #61A4FA;
  }

  ${Input}:checked + &:before {
    -webkit-transform: translateX(22px);
    -ms-transform: translateX(22px);
    transform: translateX(22px);
  }
`

const styles = {
  Wrapper,
  Input,
  Span
}

export default styles
