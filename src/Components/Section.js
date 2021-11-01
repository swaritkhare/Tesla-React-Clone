import React from "react";
import styled from "styled-components";
import Fade from 'react-reveal/Fade';

function Section({title, description, backgroundImg, leftBtnText, rightBtnText}) {
  return (
    <Wrap bgImage = {backgroundImg}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>
      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>{leftBtnText}</LeftButton>
            {rightBtnText && <RightButton>{rightBtnText}</RightButton>} 
          </ButtonGroup>
        </Fade>
        <DownArrow src="/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("/model-s.jpg");
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${props => `url("/${props.bgImage}")`}
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
  font-size: 20px;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 0px;
  @media (max-width : 768px) {
      flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgb(23, 26, 32, 0.8);
  height: 40px;
  width: 260px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 10px;
`;

const RightButton = styled(LeftButton)`
    background-color: white;
    opacity: 0.65;
    color: black;
`;

const DownArrow = styled.img`
  margin-top: 20px;
  height: 40px;
  overflow-x: hidden;
  animation : animateDown infinite 1.5s;
`;

const Buttons = styled.div`

`;