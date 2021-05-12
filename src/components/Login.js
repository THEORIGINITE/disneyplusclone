import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <Background>
        <img
          src="https://www.reviews.org/au/app/uploads/2019/08/disney-plus.png"
          alt=""
        />
      </Background>
      <Title>
        <img
          src="https://www.androidcentral.com/sites/androidcentral.com/files/field/image/2019/03/disneyplus-logo-fmi.png"
          alt=""
        />
      </Title>
      <AButton>get all there</AButton>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-y: hidden;
`;
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.5;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Title = styled.div`
  display: flex;
  margin: 40px;
  align-items: center;
  justify-content: center;
  transition: 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  cursor: pointer;
  border-radius: 999px;

  backdrop-filter: blur(8px);

  img {
    height: 40vh;
    width: auto;
    object-fit: contain;
  }

  &:hover {
    // transform: scale(0.9);
    border-radius: 999px;
    backdrop-filter: blur(30px);
  }
`;

const AButton = styled.button`
  padding: 10px 20px;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 4px;
  border: none;
  background: linear-gradient(#283dff, #1524a7);
  color: white;
  cursor: pointer;
  transition: 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);

  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;

  &:hover {
    background: linear-gradient(#1524a7, #283dff);
    padding: 10px 300px;
    border-radius: 999px;
  }
`;
