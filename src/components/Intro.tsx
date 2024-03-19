import { useEffect, useRef } from "react";
import styled from "styled-components";

const Intro = () => {
  return (
    <IntroContainer>
      <TextContainer>
        <h2>SOHYEON HONG</h2>
        <p>이것은 인트로입니다. 스크롤해서 아래로 이동하세요.</p>
      </TextContainer>
    </IntroContainer>
  );
};

export default Intro;

const IntroContainer = styled.div`
  background-color: #432261;
  height: 100vh; /* 화면 높이의 90%로 설정 */
`;

const TextContainer = styled.div`
  color: white;

  text-align: center;
`;
