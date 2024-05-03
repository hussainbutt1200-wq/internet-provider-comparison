import Card from "@/lib/ui/card";
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
     <CardContainer>
     <CardWrapper>
     <Card/>
     </CardWrapper>
     <CardWrapper>
     <Card/>
     </CardWrapper>
     </CardContainer>
    </MainDiv>
  );
};

export default UsePurpose;

const MainDiv = styled.div`
  width: 90vw;
  height: 85vh;
  margin: auto;
  padding-top: 50px;
`;
const FirstHeading = styled.div`
  width: 959px;
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
    width: 36.04%;
    height: 37.60%;
`

const CardContainer = styled.div`
    width: 74.17%;
    height: 1208px ;
    display: flex;
`
