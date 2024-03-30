import styled from "styled-components";

const About = () => {
  return (
    <AboutCatainer>
      <TextContainer>
        <p>다양한 경험을 통해 빠르게 적응하는 개발자 홍소현입니다</p>
      </TextContainer>
    </AboutCatainer>
  );
};

export default About;

const AboutCatainer = styled.div`
  background-color: #b9a8c8;
  height: 100vh; /* 화면 높이의 90%로 설정 */
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
`;

const TextContainer = styled.div`
  color: white;

  text-align: center;
`;
