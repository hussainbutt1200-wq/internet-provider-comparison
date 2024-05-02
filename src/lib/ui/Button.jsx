import React from 'react'
import { Paragraph } from './common/Paragraph'
import styled from "styled-components";
import Row from './common/Row';

const Button = () => {
  return (
   <ButtonTag>
    <Row>
    <Paragraph textSize='ex-large'>
       Lets Find you the Perfect Plan
    </Paragraph>
    </Row>
   </ButtonTag>
 
  )
}

export default Button

const ButtonTag = styled.button`

  width: 384px;
  height: 60px;
  margin: auto;
  background-color: red;
  font-family: Graphik, sans-serif;
  border-radius: 8px;
  background-color: #fff;
  color: #784ed1;
  /* text-align: center; */
  /* display: flex;
  justify-content: center; */
  /* @media (max-width: 991px) {
    padding: 0 20px;
  } */
`;