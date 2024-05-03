// 'use client'
import Button from "@/lib/ui/Button";
import { Paragraph } from "@/lib/ui/common/Paragraph";
import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <MainDiv>
      <ContentDiv>
        <LeftWrapper>
          <Paragraph textsize="sm-heading">
            Connecting you to top internet providers.
          </Paragraph>
        </LeftWrapper>
        <RightWrapper>
          <Paragraph textsize="ex-large">
            best prices, plans. speed & rating near your area - USA.
          </Paragraph>
          <Button
            text="Lets Find you the Perfect Plan"
            bgClr="white"
            textClr=""
          />
        </RightWrapper>
      </ContentDiv>
    </MainDiv>
  );
};

export default Header;

const MainDiv = styled.div`
  width: 97.5vw;
  height: 85vh;
  margin: auto;
  border-radius: 15px;
  background-image: url("/assets/header_img.png");
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 380px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-right: 10px;
    padding: 0 20px;
  }
`;
const ContentDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 384px;
  height: 200px;
`;

const LeftWrapper = styled.div`
  width: 700px;
  color: var( --white-color);
`;
