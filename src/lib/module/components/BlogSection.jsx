import React from "react";
import styled from "styled-components";
import { Paragraph } from "@/lib/ui/common/Paragraph";
import BlogsCard from "@/lib/ui/BlogsCard";

const BlogSection = () => {
  return (
    <MainDiv>
      <Paragraph textsize="md-heading">
        Read the Latest from Our Blogs
      </Paragraph>
      <Paragraph textsize="md-heading">button</Paragraph>
      <BlogWrapper>
        <BlogsCard />
        <BlogsCard />
        <BlogsCard />
      </BlogWrapper>
    </MainDiv>
  );
};

export default BlogSection;

const MainDiv = styled.div`
  width: 90vw;
  height: fit-content;
  margin: auto;
  padding-top: 0;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  color: #28174b;
  padding-top: 50px;
  text-align: center;
`;

const BlogWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
