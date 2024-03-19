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
  font-size: 30px;
  text-align: center;
`;

const MainText = styled.p`
  font-size: 50px;
  font-weight: 600;
`;
