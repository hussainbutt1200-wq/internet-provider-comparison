'use client'
import Home from "@/lib/module/home/Home";
import React from "react";
import styled from "styled-components";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 10vh;
  background-color: red;
  border: 1vw solid yellow;
`;
const HomePage = () => {
  return (
    <StyledAppLayout>
    <Home/>
    </StyledAppLayout>
  );
};

export default HomePage;
