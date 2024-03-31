import styled from "styled-components";

const Intro = () => {
  return (
    <IntroContainer>
      <TextContainer>
        FRONTEND DEVELOPER
        <MainText>SOHYEON HONG</MainText>
      </TextContainer>
    </IntroContainer>
  );
};

export default Intro;

const IntroContainer = styled.div`
  background: linear-gradient(45deg, Violet, Orange);
  background-color: #2a1939;
  height: 100vh; /* 화면 높이의 90%로 설정 */
`;

const TextContainer = styled.div`
  color: white;
  position: relative;
  top: 45%;
  align-items: center;
  justify-content: center;
  display: grid;

  font-size: 30px;
  text-align: center;
`;

const MainText = styled.div`
  font-size: 50px;
  font-weight: 600;
  border-right: 0.15em solid violet;
  overflow: hidden;
  white-space: nowrap;
  text-align: left;
  width: 0;
  animation:
    typing 0.8s steps(20, end) forwards,
    blink 1s step-end infinite;
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }
`;
