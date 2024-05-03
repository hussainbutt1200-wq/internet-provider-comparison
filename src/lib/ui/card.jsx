import * as React from "react";
import styled from "styled-components";
import { Paragraph } from "./common/Paragraph";

const Card = () => {
  return (
    <MainDiv>
      <Img
        loading="lazy"
        src="/assets/card_image1.png"
      />
      <ContentWrapper>
      <Paragraph textsize="ex-large">For Businesses</Paragraph>
       <Paragraph textsize="medium">
       We offer a range of plans tailored to support your company&apos;s
        connectivity requirements. Our business internet services ensure smooth
        operations, with additional benefits like free installation and expert
        customer support.
       </Paragraph>
      <Paragraph textsize="ex-large">Consult</Paragraph>
      </ContentWrapper>
      <Div5 />
    </MainDiv>
  );
}

export default Card;

const MainDiv = styled.div`
  border-radius: 11px;
  background: linear-gradient(100.86deg, rgba(151, 71, 255, 0.15) 0.64%, rgba(217, 217, 217, 0) 58.76%);
  border-color: rgba(146, 146, 146, 1);
  border-style: solid;
  border-width: 1px;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 12px 9px 20px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;
const ContentWrapper = styled.div`
  text-align: left;
`;
const Img = styled.img`
  aspect-ratio: 1.61;
  object-fit: auto;
  object-position: center;
  width: 100%;
  align-self: stretch;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;
const Div2 = styled.div`
  color: #28174b;
  margin: 90px 0 0 31px;
  font: 400 40px Alliance No.2, sans-serif;
  @media (max-width: 991px) {
    margin: 40px 0 0 10px;
  }
`;
const Div3 = styled.div`
  @media (max-width: 991px) {
    max-width: 100%;
    margin-right: 10px;
  }
`;
const Div4 = styled.div`
  color: #784ed1;
  margin: 26px 0 0 31px;
  font: 500 22px Graphik, sans-serif;
  @media (max-width: 991px) {
    margin-left: 10px;
  }
`;
const Div5 = styled.div`
  border-color: rgba(120, 78, 209, 1);
  border-style: solid;
  border-width: 2px;
  background-color: #784ed1;
  width: 80px;
  height: 1px;
  margin: 9px 0 0 31px;
  @media (max-width: 991px) {
    margin-left: 10px;
  }
`;

