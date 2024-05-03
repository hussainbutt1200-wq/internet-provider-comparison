import styled, { css } from "styled-components";

// If you want to convert it to HTML (e.g., h1 or p), you can use it as props
export const Paragraph = styled.p`
  ${(props) =>
    props.textsize === "small" &&
    css`
      font-family: var(--heading-primary-font);
      font-size: var(--medium-font);
      font-weight: 400;
      line-height: var(--medium-line-height);
      text-align: left;
      width: fit-content;
    `}
  ${(props) =>
    props.textsize === "medium" &&
    css`
      font-family: var(--heading-primary-font);
      font-size: var(--small-font);
      color: var(--secondary-color);
      font-weight: 300;
      line-height: var(--small-line-height);
      text-align: left;
      width: fit-content;
    `}
  ${(props) =>
    props.textsize === "large" &&
    css`
      font-family: var(--heading-primary-font);
      font-size: var(--large-font);
      font-weight: 300;
      line-height: var(--large-line-height);
      text-align: left;
      width: fit-content;
    `}
    ${(props) =>
    props.textsize === "ex-large" &&
    css`
      font-family: var(--heading-secondary-font);
      font-size: var(--ex-large-font);
      font-weight: 500;
      line-height: var(--ex-large-line-height);
      color: var(--primary-color);
      text-align: left;
      width: fit-content;
    `}
    ${(props) =>
    props.textsize === "sm-heading" &&
    css`
      font-family: var(--heading-primary-font);
      font-size: var(--sm-heading-font);
      font-weight: 400;
      line-height: var(--sm-heading-line-height);
      text-align: center
      width: fit-content;
    `}
    ${(props) =>
    props.textsize === "md-heading" &&
    css`
      font-family: var(--heading-primary-font);
      font-size: var(--md-heading-font);
      font-weight: 400;
      line-height: var(--md-heading-line-height);
      text-align: center
      width: fit-content;
    `}
    ${(props) =>
    props.textsize === "lg-heading" &&
    css`
      font-family: var(--heading-primary-font);
      font-size: var(--lg-heading-font);
      font-weight: 400;
      line-height: var(--lg-heading-line-height);
      letter-spacing: 0.01em;
      text-align: left;
      width: fit-content;
      margin: auto;
      letter-spacing: 1%;
    `}
  line-height: 1.4;
`;
