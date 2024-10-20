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
  overflow: hidden;
`;

const TextContainer = styled.div`
  color: white;
  position: relative;
  top: 45%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;

  text-align: center;
`;

const FrontEndDeveloper = styled.div`
  font-size: 3.2vw;

  @media (max-width: 768px) {
    font-size: 6vw; // 모바일에서의 폰트 크기 조정
  }
`;

const MainText = styled.span`
  font-size: 4.5vw;
  font-weight: 600;
  border-right: 0.15em solid orange;
  overflow: hidden;
  white-space: nowrap;
  text-align: left;

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 37.5vw;
    }
  }
  @keyframes typing-mobile {
    from {
      width: 0;
    }
    to {
      width: 66vw;
    }
  }

  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }

  &.animate {
    animation: none;
    animation:
      typing 1s steps(12, end) forwards,
      blink 1s step-end infinite;
    @media (max-width: 768px) {
      animation: typing-mobile 1s steps(10, end) forwards;
    }
  }

  @media (max-width: 768px) {
    font-size: 8vw; // 모바일에서의 폰트 크기 조정
  }
`;
