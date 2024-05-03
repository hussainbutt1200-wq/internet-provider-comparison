import { Paragraph } from "./common/Paragraph";
import styled, { css } from "styled-components";

import React from "react";

const Button = (props) => {
  return (
    <ButtonTag style={{ backgroundColor: props.bgClr }}>
      <Paragraph textsize="ex-large" style={{ color: props.textClr }}>
        {props.text}
      </Paragraph>
    </ButtonTag>
  );
};
export default Button;

const ButtonTag = styled.button`
  width: 384px;
  height: 60px;
  margin: auto;
  font-family: Graphik, sans-serif;
  border-radius: 8px;
  color: #784ed1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
