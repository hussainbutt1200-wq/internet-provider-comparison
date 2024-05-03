import { Paragraph } from "@/lib/ui/common/Paragraph";
import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <MainDiv>
      <Img
        loading="lazy"
        src="/assets/yip_logo.svg"
      />
      <MainWrapper>
       <MenuWrapper>
          <Paragraph textsize='small'>Internet</Paragraph>
          <Paragraph textsize='small'>Cable/Landline</Paragraph>
          <Paragraph textsize='small'>Phone</Paragraph>
          <Paragraph textsize='small'>Blogs</Paragraph>
        </MenuWrapper>
        <AboutUs>About Us</AboutUs>
        <VerticalLine />
        <NumberWrapper>
          <Img2 loading="lazy" src="/assets/phone_icon.svg" />
          <Paragraph textsize='small'>Call Us - 111-0900-78601</Paragraph>
        </NumberWrapper>
      </MainWrapper>
    </MainDiv>
  );
};

export default Navbar;

const MainDiv = styled.div`
  display: flex;
  width: 100%;
  padding: 15px 60px;
  box-sizing: border-box;
  gap: 20px;
  color: #28174b;
  justify-content: space-between;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

const Img = styled.img`
  aspect-ratio: 1.69;
  object-fit: auto;
  object-position: center;
  width: 108px;
  max-width: 100%;
`;

const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: space-between;
  margin: auto 0;
  padding: 0 20px;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

const MenuWrapper = styled.div`
  align-self: stretch;
  display: flex;
  gap: 20px;
  white-space: nowrap;
  margin: auto 0;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
    white-space: initial;
  }
`;

const AboutUs = styled.div`
  font-family: Alliance No.2, sans-serif;
  align-self: stretch;
  margin: auto 0;
`;

const VerticalLine = styled.div`
  border-color: rgba(120, 78, 209, 1);
  border-style: solid;
  border-width: 1px;
  background-color: #784ed1;
  align-self: stretch;
  width: 1px;
  height: 41px;
`;

const NumberWrapper = styled.div`
  align-self: stretch;
  display: flex;
  gap: 14px;
  margin: auto 0;
`;

const Img2 = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 18px;
  fill: #784ed1;
`;