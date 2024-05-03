import Card from "@/lib/ui/Card";
import { Paragraph } from "@/lib/ui/common/Paragraph";
import React from "react";
import styled from "styled-components";

const UsePurpose = () => {
  return (
    <MainDiv>
      <FirstHeading>
        <Paragraph textsize="sm-heading">
          Your one-stop shop for internet, cable TV, and wireless.
        </Paragraph>
      </FirstHeading>
      <SecondHeading>
        <Paragraph textsize="small">
          Elevate Entertainment - Connect with Family - Boost your Business
        </Paragraph>
      </SecondHeading>
      {/* <CardWrapper>
        <Card url="/assets/card_image1.png" />
      </CardWrapper> */}
      <CardContainer>
        <CardWrapper>
          <Card url="/assets/card_image2.png" />
        </CardWrapper>
        <CardWrapper>
          <Card url="/assets/card_image3.png" />
        </CardWrapper>
      </CardContainer>
    </MainDiv>
  );
};

export default UsePurpose;

const MainDiv = styled.div`
  width: 90vw;
  height: fit-content;
  margin: auto;
  padding-top: 50px;
`;
const FirstHeading = styled.div`
  width: 90%;
  color: var(--primary-color);
  text-align: center;
  margin: auto;
`;
const SecondHeading = styled.div`
  width: 560px;
  color: var(--secondary-color);
  text-align: center;
  margin: auto;
  margin-top: 10px;
`;
const CardWrapper = styled.div`
  width: 692px;
  height: 722px;
`;

const CardContainer = styled.div`
  width: 90%;
  height: fit-content;
  display: flex;
  gap: 5%;
  margin-top: 60px !important;
  margin: auto;
`;
