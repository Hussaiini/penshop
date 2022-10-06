import { ArrowBack, ArrowForward } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import sneakerImg from '../sneakers2.jpg';

const Containter = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  /* background-color: #6da07f; */
  position: relative;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.position === 'left' && '10px'};
  right: ${(props) => props.position === 'right' && '10px'};
  margin: auto;
  cursor: pointer;
  opacity: 0.9;
  z-index: 2;
`;
const Wrapper = styled.div`
  display: flex;
  /* align-items: center; */
  /* width: 100vw; */
  height: 100vh;
  /* align-items: center; */
`;
const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;
const PhotoContainer = styled.div`
  flex: 1;
  height: 100%;
`;
const Title = styled.h1`
  font-size: 70px;
`;
const Description = styled.p`
  margin: 50px 0ex;
  font-size: 20px;
  font-weight: 500;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: ointer;
`;

const MsgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  padding: 50px;
  height: 80%;
`;
const Carousel = () => {
  return (
    <Containter>
      <Arrow position="left">
        <ArrowBack />
      </Arrow>
      <Wrapper>
        <Slide>
          <PhotoContainer>
            <Image src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
            {/* <Image src="https://i.ibb.co/DG69bQ4/2.png" /> */}
            {/* <Image src={sneakerImg} /> */}
            {/* <img src={sneakerImg} /> */}
          </PhotoContainer>
          <MsgContainer>
            <Title>Bonanza Sale</Title>
            <Description>
              Take Advantage of this Promo and Shopping...
            </Description>
            <Button>Get Started</Button>
          </MsgContainer>
        </Slide>
      </Wrapper>
      <Arrow position="right">
        <ArrowForward />
      </Arrow>
    </Containter>
  );
};

export default Carousel;
