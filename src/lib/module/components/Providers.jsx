import React from "react";
import styled from "styled-components";
import { Paragraph } from "@/lib/ui/common/Paragraph";
import Button from "@/lib/ui/Button";

const Providers = () => {
  return (
    <MainDiv>
      <Paragraph textsize="md-heading">
        Leading Internet Providers, In One Place!
      </Paragraph>
      <ProvidersWrapper>
        <ButtonWrapper>
          <Button
            text="Lets Find you the Perfect Plan"
            bgClr="#784ED1"
            textClr="white"
          />
        </ButtonWrapper>
      </ProvidersWrapper>
    </MainDiv>
  );
};

export default Providers;

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
  text-align: center;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;
const ProvidersWrapper = styled.div`
  width: 100%;
  height: 900px;
  background-image: url("/assets/provider_image.svg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
`;
