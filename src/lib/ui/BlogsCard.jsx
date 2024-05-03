import React from "react";
import styled from "styled-components";
import { Paragraph } from "./common/Paragraph";

const BlogsCard = () => {
  return (
    <MainDiv>
      <Img src="/assets/blogs_img.png" />
      <Paragraph textsize="ex-large" style={{ width: "300px" }}>
        How to Choose an internet Service Provider?
      </Paragraph>
    </MainDiv>
  );
};

export default BlogsCard;

const MainDiv = styled.div`
  width: 446px;
  height: 477px;
  margin: auto;
  padding-top: 30px;
  box-sizing: border-box;
  color: #28174b;
  padding: 25px;
`;

const Img = styled.img`
  width: 100%;
  height: 60%;
  margin: auto;
  margin-bottom: 45px;
`;
