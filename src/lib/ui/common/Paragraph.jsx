import styled, { css } from "styled-components";

// If you want to convert it to HTML (e.g., h1 or p), you can use it as props
export const Paragraph = styled.p`
  ${(props) =>
    props.textSize === "small" &&
    css`
      font-family: Alliance No.2;
      font-size: 18px;
      font-weight: 400;
      line-height: 20px;
      text-align: left;
      width: fit-content;
    `}
  ${(props) =>
    props.textSize === "medium" &&
    css`
      font-family: Alliance No.2;
      font-size: 17px;
      font-weight: 400;
      line-height: 28px;
      text-align: left;
      width: fit-content;
    `}
  ${(props) =>
    props.textSize === "large" &&
    css`
      font-family: Alliance No.2;
      font-size: 20px;
      font-weight: 300;
      line-height: 28px;
      text-align: left;
      width: fit-content;
    `}
    ${(props) =>
    props.textSize === "ex-large" &&
    css`
      font-family: Graphik;
      font-size: 22px;
      font-weight: 400;
      line-height: 40px;
      text-align: left;
      width: fit-content;
    `}
    ${(props) =>
    props.textSize === "sm-heading" &&
    css`
      font-family: Alliance No.2;
      font-size: 60px;
      font-weight: 400;
      line-height: 72.72px;
      text-align: cente
      width: fit-content;
    `}
    ${(props) =>
    props.textSize === "lg-heading" &&
    css`
      font-family: Alliance No.2;
      font-size: 100px;
      font-weight: 400;
      line-height: 100px;
      letter-spacing: 0.01em;
      text-align: left;
      width: fit-content;
    `}
  line-height: 1.4;
`;
