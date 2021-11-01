import React from "react";
import styled from "styled-components";
import Fade from 'react-reveal/Fade';

function Models({title, backgroundImg}) {
  return (
    <Wrap bgImage = {backgroundImg}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
        </ItemText>
      </Fade>
      <Buttons>
        <Specifications>
            <Range>396 <p>Range(EPA est.)</p></Range>
            <Speed>1.99 <p>0-60 mph*</p></Speed>
            <TopSpeed>200 <p>Top Speed*</p></TopSpeed>
            <PeakPower>1,020 <p>Peak Power</p></PeakPower>
            <OrderBtn><a>ORDER NOW</a></OrderBtn>
        </Specifications>
      </Buttons>
    </Wrap>
  );
}

export default Models;

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


const Buttons = styled.div`
`;


const Specifications = styled.div`
    display: flex;
    width: 100%;
    margin: 10px;
    p{
        font-size: 20px;
        color: white;
    }
    @media (max-width : 1200) {
        flex-direction: column;
    }
`;

const Range = styled.div`
    padding: 20px 40px;
    font-size: 35px;
    color: white;
    @media (max-width : 965px) {
        display: none;
    }
`;

const Speed = styled.div`
    padding: 20px 40px;
    font-size: 35px;
    color: white;
    @media (max-width : 365px) {
        display: none;
    }
`;

const TopSpeed = styled.div`
    padding: 20px 40px;
    font-size: 35px;
    color: white;
    @media (max-width : 600px) {
        display: none;
    }
`;

const PeakPower = styled.div`
    padding: 20px 40px;
    font-size: 35px;
    color: white;
    @media (max-width : 768px) {
        display: none;
    }
`;

const OrderBtn = styled.div`
    padding: 30px 0;
    a{
        padding: 10px 30px;
        font-size: 20px;
        text-transform: uppercase;
        color : white;
        border: 2px solid white;
        border-radius: 50px;
        width : 100%;
    }
`;