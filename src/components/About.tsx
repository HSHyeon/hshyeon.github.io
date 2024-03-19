import styled from "styled-components";

const About = () => {
  return (
    <AboutCatainer>
      <TextContainer>
        <h2>About</h2>
      </TextContainer>
    </AboutCatainer>
  );
};

export default About;

const AboutCatainer = styled.div`
  background-color: #b9a8c8;
  height: 100vh; /* 화면 높이의 90%로 설정 */
`;

const TextContainer = styled.div`
  color: white;

  text-align: center;
`;
