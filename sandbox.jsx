import * as React from "react";
import styled from "styled-components";

function MyComponent() {
  return (
    <Div>
      <Img
        loading="lazy"
        srcSet="..."
      />
      <Div2>
        <Div3>
          <Column>
            <Div4>
              Connecting you to
              <br />
              top internet providers.
            </Div4>
          </Column>
          <Column2>
            <Div5>
              <Div6>
                best prices, plans. speed & rating near your area - USA.
              </Div6>
              <Div7>Lets Find you the Perfect Plan</Div7>
            </Div5>
          </Column2>
        </Div3>
      </Div2>
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  align-self: stretch;
  position: relative;
  display: flex;
  min-height: 827px;
  align-items: center;
  justify-content: center;
  margin: 15px 16px 0;
  padding: 80px 60px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-right: 10px;
    padding: 0 20px;
  }
`;

const Img = styled.img`
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

const Div2 = styled.div`
  position: relative;
  width: 100%;
  max-width: 1644px;
  margin: 453px 0 20px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const Div3 = styled.div`
  gap: 20px;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 75%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div4 = styled.div`
  color: #fff;
  letter-spacing: 1px;
  position: relative;
  font: 400 100px/100px Alliance No.2, -apple-system, Roboto, Helvetica,
    sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
    font-size: 40px;
    line-height: 44px;
  }
`;

const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 25%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div5 = styled.div`
  position: relative;
  display: flex;
  margin-top: 39px;
  flex-grow: 1;
  flex-direction: column;
  font-size: 22px;
  font-weight: 500;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Div6 = styled.div`
  color: #fff;
  font-family: Graphik, sans-serif;
  line-height: 40px;
`;

const Div7 = styled.div`
  font-family: Graphik, sans-serif;
  border-radius: 8px;
  background-color: #fff;
  margin-top: 34px;
  color: #784ed1;
  justify-content: center;
  padding: 20px 38px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;


