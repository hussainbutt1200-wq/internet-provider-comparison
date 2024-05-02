import Button from '@/lib/ui/button';
import React from 'react'
import styled from "styled-components";

const Header = () => {
  return (
    <MainDiv>
        <ContentDiv>
            <Button/>
        </ContentDiv>
    </MainDiv>
  )
}

export default Header

const MainDiv = styled.div`
  width: 97.5vw;
  height: 85vh;
  margin: auto;
  /* background-color: red; */
  border-radius: 15px;
  background-image: url('/assets/header_img.png');
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 453px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-right: 10px;
    padding: 0 20px;
  }
`;
const ContentDiv = styled.div`
  width: 100%;
  max-width: 1644px;
`;