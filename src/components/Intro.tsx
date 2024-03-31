import styled from "styled-components";

interface IntroProps {
  animate: boolean; // 애니메이션을 제어하기 위한 prop
}

const Intro = ({ animate }: IntroProps) => {
  return (
    <IntroContainer>
      <TextContainer>
        <FrontEndDeveloper>FRONTEND DEVELOPER</FrontEndDeveloper>
        <MainText className={animate ? "animate" : ""}>SOHYEON HONG</MainText>
      </TextContainer>
    </IntroContainer>
  );
};

export default Intro;

const IntroContainer = styled.div`
  background: linear-gradient(45deg, Violet, Orange);
  background-color: #2a1939;
  height: 100vh;
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

const FrontEndDeveloper = styled.div`
  font-size: 30px;
`;

const MainText = styled.div`
  font-size: 50px;
  font-weight: 600;
  border-right: 0.15em solid orange;
  overflow: hidden;
  white-space: nowrap;
  text-align: left;
  width: 0%;

  @keyframes typing {
    from {
      width: 0%;
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

  &.animate {
    animation:
      typing 0.8s steps(20, end) forwards,
      blink 1s step-end infinite;
  }
`;
