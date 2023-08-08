import styled from "styled-components";


export const Input = styled.input`
  border: none; outline: none;
  color: #444;
  font-size: 15px;
  background: transparent;
  width: 100%;

  ::placeholder {
    color:#333333;
  }

  transition: 500ms;
  &:focus {
    color:white;
  }
`


export const FormInput = styled(Input)`
  border-bottom: 1px solid #333333;
  padding: 0 15px 20px 0;

  &:focus {
    border-bottom: 1px solid #39b54a;
  }
`


export const FormTextArea = styled.textarea`
  border: none; outline: none;
  color: #444;
  background: transparent;
  font-size: 15px;
  resize: none;
  border-bottom: 1px solid #333333;

  height: 150px; width: 100%;

  ::placeholder {
    color:#333333;
  }

  transition: 500ms;
  &:focus {
    color:white;
    border-bottom: 1px solid #39b54a;
  }
`




export const FormButton = styled.button`
  width: 100%; height: 50px;
  padding: 10px;

  background: #39B54A;
  color: white;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 2px;
`