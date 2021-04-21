import React from 'react'
import styled from 'styled-components'

const RadioWrapper = styled.div`
  display: inline-block;
`

const Mark = styled.span`
  display: inline-block;
  position: relative;
  border: 1px solid rgba(232, 232, 232, 1);
  width: 14px;
  height: 14px;
  left: 0;
  border-radius: 50%;
  margin-right: 5px;
  vertical-align: middle;
  &::after {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border-radius: 50%;
    background-color: rgba(4, 195, 92, 1);
    opacity: 0;
    left: 50%;
    top: 50%;
    position: absolute;
    transition: all 110ms;
  }
`

const Input = styled.input`
  position: absolute;
  visibility: hidden;
  display: none;
  &:checked + ${Mark} {
    &::after {
      width: 8px;
      height: 8px;
      opacity: 1;
      left: 17%;
      top: 17%;
    }
  }
`

const Label = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  /* padding: 5px 10px 5px 0; */
  position: relative;
  ${props =>
    props.disabled && `
      cursor: not-allowed;
      opacity: 0.4;
    `
  }
`

const Radio = ({ name, children }) => (
  <RadioWrapper>
    <Label>
      <Input name={name} type='radio' />
      <Mark />
      {children}
    </Label>
  </RadioWrapper>
)

export default Radio
