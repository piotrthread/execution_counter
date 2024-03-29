import styled from "styled-components";
import { useState } from "react";
import useSound from "use-sound";
import catch_sound from "./sounds/catch.wav";
import miss_sound from "./sounds/miss.wav";

const Catches = styled.div`
  background-color: #00e017;
  height: 100%;
  flex-basis: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Misses = styled.div`
  background-color: #ff1962;
  flex-basis: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const Text = styled.p`
  font-size: 20vw;
  color: white;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  position: relative;
  justify-content: center;
`;

const ResultPercent = styled.p`
  background-color: white;
  padding: 15px 20px;
  text-align: center;
  color: black;
  position: absolute;
  bottom: 0;
  font-size: 4vw;
`;
// eslint-disable-next-line
const ResultPoints = styled.p`
  background-color: white;
  padding: 15px 20px;
  color: black;
  position: absolute;
  top: 0;
  font-size: 4vw;
`;

const ResetButton = styled.p`
  padding: 15px 20px;
  color: white;
  position: absolute;
  top: 4px;
  right: 0;
  font-size: 4vw;
  cursor: pointer;
`;

const ChangeCatch = styled.p`
  padding: 15px 20px;
  color: white;
  position: absolute;
  bottom: 4px;
  right: 0;
  font-size: 4vw;
  cursor: pointer;
`;
const ChangeMiss = styled.p`
  padding: 15px 20px;
  color: white;
  position: absolute;
  bottom: 4px;
  left: 0;
  font-size: 4vw;
  cursor: pointer;
`;

const ExecutionCounter = () => {
  const [catches, setCatches] = useState(0);
  const [misses, setMisses] = useState(0);
  const [playCatchSound] = useSound(catch_sound);
  const [playMissSound] = useSound(miss_sound);
  return (
    <Wrapper>
      <ChangeMiss onClick={() => setMisses(misses - 1)}>BACK</ChangeMiss>
      <ChangeCatch onClick={() => setCatches(catches - 1)}>BACK</ChangeCatch>
      <ResetButton
        onClick={() => {
          setCatches(0);
          setMisses(0);
        }}
      >
        RESET
      </ResetButton>
      <Misses
        onClick={() => {
          setMisses(misses + 1);
          playMissSound();
        }}
      >
        <Text>{misses}</Text>
      </Misses>
      <Catches
        onClick={() => {
          setCatches(catches + 1);
          playCatchSound();
        }}
      >
        <Text>{catches}</Text>
      </Catches>
      {/* <ResultPoints>
        {catches + misses <= 18
          ? ((catches / 18) * 10).toFixed(2)
          : ((catches / (catches + misses)) * 10).toFixed(2)}{" "}
        pts
      </ResultPoints> */}
      <ResultPercent>
        {/* {catches + misses <= 18
          ? ((catches / 18) * 100).toFixed(2)
          : ((catches / (catches + misses)) * 100).toFixed(2)} */}
        {catches < 1 ? 0 : ((catches / (catches + misses)) * 100).toFixed(2)}%
      </ResultPercent>
    </Wrapper>
  );
};

export default ExecutionCounter;
