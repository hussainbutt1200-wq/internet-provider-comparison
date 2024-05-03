import { Paragraph } from './common/Paragraph'
import styled,{css} from "styled-components";


import React from 'react'


const button = (props) => {
  return (
   <ButtonTag style={{backgroundColor: props.bgClr, color: props.textClr}}>
    <Paragraph textsize='ex-large'>
      {props.text}
    </Paragraph>
   </ButtonTag>
 
  )
}
export default button

const ButtonTag = styled.button`
  width: 384px;
  height: 60px;
  margin: auto;
  font-family: Graphik, sans-serif;
  border-radius: 8px;
  color: #784ed1;
`;