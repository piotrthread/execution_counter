import { useState } from "react";
import styled from "styled-components";
import catch_sound from "./sounds/catch.wav";
import tunel from "./sounds/tunel.wav";
import hopka from "./sounds/hopka.wav";
import sweetspot from "./sounds/sweetspot.wav";
import useSound from "use-sound";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: #00f0ff;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const CenterRow = styled.div`
  display: flex;
  justify-content: center;
  height: 45vw;
`;

const ObstaclesWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 20vw;
  border: 4px solid white;
  background-color: rgba(255, 255, 255, 0.6);

  &:after {
    position: absolute;
    display: inline-block;
    content: "START";
    z-index: 9999;
    color: white;
    font-size: 25px;
    transform: rotate(-90deg);
    right: -95px;
    top: 47%;
  }
`;

const Obstacle = styled.div`
  color: white;
  display: flex;
  width: 100%;
  height: 15vw;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:nth-child(1) {
    border-bottom: 4px solid white;
  }
  &:nth-child(2) {
    border-bottom: 4px solid white;
  }
`;

const MenuRow = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;
  margin: 20px 0;
`;

const CenterField = styled.div`
  width: 25vw;
  border: 4px solid white;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.6);
  border-right: 2px solid white;
`;

const Header = styled.p`
  font-size: 30px;
  color: white;
`;

const Reset = styled.p`
  font-size: 30px;
  cursor: pointer;
  color: white;
`;

const FieldWrapper = styled.div`
  display: flex;
`;

const ObstacleName = styled.span`
  font-size: 20px;
`;

const FrizgilityLevel1 = () => {
  const [points, setPoints] = useState(0);
  const [playCatchSound] = useSound(catch_sound);
  const [playTunelSound] = useSound(tunel);
  const [playHopSound] = useSound(hopka);
  const [playSweetSpotSound] = useSound(sweetspot);
  return (
    <Wrapper>
      <MenuRow>
        <Header>{points} pts</Header>
        <Reset onClick={() => setPoints(0)}>RESET</Reset>
      </MenuRow>
      <FieldWrapper>
        <CenterRow>
          <CenterField
            onClick={() => {
              setPoints(points + 10);
              playCatchSound();
            }}
          />
          <CenterField
            onClick={() => {
              setPoints(points + 3);
              playCatchSound();
            }}
          />
          <ObstaclesWrapper>
            <Obstacle
              onClick={() => {
                setPoints(points + 5);
                playTunelSound();
              }}
            >
              <ObstacleName>TUNEL</ObstacleName>
            </Obstacle>
            <Obstacle
              onClick={() => {
                setPoints(points + 5);
                playHopSound();
              }}
            >
              <ObstacleName>HOPKA</ObstacleName>
            </Obstacle>
            <Obstacle
              onClick={() => {
                setPoints(points + 5);
                playTunelSound();
              }}
            >
              <ObstacleName>TUNEL</ObstacleName>
            </Obstacle>
          </ObstaclesWrapper>
        </CenterRow>
      </FieldWrapper>
      <MenuRow>
        <Reset
          onClick={() => {
            setPoints(points + 5);
            playSweetSpotSound();
          }}
        >
          SWEET SPOT
        </Reset>
      </MenuRow>
    </Wrapper>
  );
};

export default FrizgilityLevel1;
