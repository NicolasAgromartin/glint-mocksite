import styled from "styled-components"


export const ActionButton = styled.a`
  width: clamp(130px, 255px, 300px); height: 50px ;
  padding: 10px;

  border: 2px solid white;

  text-transform: uppercase;
  font-size: 12px ;
  font-weight: bold;
  letter-spacing: 3px;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all .6s;
  &:hover {
    background: white; 
    color: #000;
  }
`

export const FormButton = styled.button`
  width: 100%; height: 50px;
  padding: 10px;

  background: #39B54A;
  color: white;
`