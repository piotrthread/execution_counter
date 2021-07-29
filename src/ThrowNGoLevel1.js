import { useState } from "react";
import styled from "styled-components";
import catch_sound from "./sounds/catch.wav";
import useSound from "use-sound";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 50px;
  display: flex;
  background-color: #00f0ff;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const CenterRow = styled.div`
  display: flex;
  justify-content: center;
  height: 18vw;
`;
const SideRow = styled.div`
  display: flex;
  justify-content: center;
  height: 9vw;
`;

const LengthRow = styled.div`
  display: flex;
  justify-content: space-around;
  color: white;
  width: 100%;
  padding-bottom: 15px;
`;

const MenuRow = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const CenterField = styled.div`
  width: 18vw;
  border: 3px solid white;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.6);
`;

const StartLeft = styled.div`
  position: relative;
  width: 18vw;
  border: 3px solid white;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.6);

  &:after {
    position: absolute;
    display: inline-block;
    content: "START";
    z-index: 9999;
    color: white;
    font-size: 25px;
    transform: rotate(90deg);
    left: -35px;
    top: 120px;
  }
`;

const StartRight = styled.div`
  position: relative;
  width: 18vw;
  border: 3px solid white;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.6);

  &:after {
    position: absolute;
    display: inline-block;
    content: "START";
    z-index: 9999;
    color: white;
    font-size: 25px;
    transform: rotate(-90deg);
    right: -35px;
    top: 120px;
  }
`;

const SideField = styled.div`
  width: 18vw;
  border: 3px solid white;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.3);
`;

const Header = styled.p`
  margin: 40px;
  font-size: 40px;
  color: white;
`;

const Reset = styled.p`
  margin: 40px;
  font-size: 40px;
  cursor: pointer;
  color: white;
`;

const ThrowNGoLevel1 = () => {
  const [points, setPoints] = useState(0);
  const [side, setSide] = useState(false);
  const [playCatchSound] = useSound(catch_sound);
  return (
    <Wrapper>
      <MenuRow>
        <Header>{points} pts</Header>
        <Reset onClick={() => setPoints(0)}>RESET</Reset>
      </MenuRow>

      {side ? (
        <>
          <LengthRow>
            <span>5</span>
            <span>4</span>
            <span>3</span>
            <span>2</span>
            <span>1</span>
          </LengthRow>
          <SideRow>
            <SideField
              onClick={() => {
                setPoints(points + 6);
                playCatchSound();
              }}
            />
            <SideField
              onClick={() => {
                setPoints(points + 5);
                playCatchSound();
              }}
            />
            <SideField
              onClick={() => {
                setPoints(points + 4);
                playCatchSound();
              }}
            />
            <SideField
              onClick={() => {
                setPoints(points + 3);
                playCatchSound();
              }}
            />
            <SideField
              onClick={() => {
                setPoints(points + 1);
                playCatchSound();
              }}
            />
          </SideRow>
          <CenterRow>
            <CenterField
              onClick={() => {
                setPoints(points + 12);
                playCatchSound();
              }}
            />
            <CenterField
              onClick={() => {
                setPoints(points + 10);
                playCatchSound();
              }}
            />
            <CenterField
              onClick={() => {
                setPoints(points + 8);
                playCatchSound();
              }}
            />
            <CenterField
              onClick={() => {
                setPoints(points + 6);
                playCatchSound();
              }}
            />
            <StartRight
              onClick={() => {
                setPoints(points + 1);
                playCatchSound();
              }}
            />
          </CenterRow>
          <SideRow>
            <SideField
              onClick={() => {
                setPoints(points + 6);
                playCatchSound();
              }}
            />
            <SideField
              onClick={() => {
                setPoints(points + 5);
                playCatchSound();
              }}
            />
            <SideField
              onClick={() => {
                setPoints(points + 4);
                playCatchSound();
              }}
            />
            <SideField
              onClick={() => {
                setPoints(points + 3);
                playCatchSound();
              }}
            />
            <SideField
              onClick={() => {
                setPoints(points + 1);
                playCatchSound();
              }}
            />
          </SideRow>
        </>
      ) : (
        <>
          <LengthRow>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
          </LengthRow>
          <SideRow>
            <SideField
              onClick={() => {
                setPoints(points + 1);
                playCatchSound();
              }}
            />
            <SideField
              onClick={() => {
                setPoints(points + 3);
                playCatchSound();
              }}
            />
            <SideField
              onClick={() => {
                setPoints(points + 4);
                playCatchSound();
              }}
            />
            <SideField
              onClick={() => {
                setPoints(points + 5);
                playCatchSound();
              }}
            />
            <SideField
              onClick={() => {
                setPoints(points + 6);
                playCatchSound();
              }}
            />
          </SideRow>
          <CenterRow>
            <StartLeft
              onClick={() => {
                setPoints(points + 1);
                playCatchSound();
              }}
            />
            <CenterField
              onClick={() => {
                setPoints(points + 6);
                playCatchSound();
              }}
            />
            <CenterField
              onClick={() => {
                setPoints(points + 8);
                playCatchSound();
              }}
            />
            <CenterField
              onClick={() => {
                setPoints(points + 10);
                playCatchSound();
              }}
            />
            <CenterField
              onClick={() => {
                setPoints(points + 12);
                playCatchSound();
              }}
            />
          </CenterRow>
          <SideRow>
            <SideField
              onClick={() => {
                setPoints(points + 1);
                playCatchSound();
              }}
            />
            <SideField
              onClick={() => {
                setPoints(points + 3);
                playCatchSound();
              }}
            />
            <SideField
              onClick={() => {
                setPoints(points + 4);
                playCatchSound();
              }}
            />
            <SideField
              onClick={() => {
                setPoints(points + 5);
                playCatchSound();
              }}
            />
            <SideField
              onClick={() => {
                setPoints(points + 6);
                playCatchSound();
              }}
            />
          </SideRow>
        </>
      )}

      <MenuRow>
        <Reset onClick={() => setSide(!side)}>SWITCH SIDE</Reset>
        <Reset
          onClick={() => {
            setPoints(points + 5);
            playCatchSound();
          }}
        >
          SWEET SPOT
        </Reset>
      </MenuRow>
    </Wrapper>
  );
};

export default ThrowNGoLevel1;
