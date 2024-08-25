import styled from "styled-components";

const About = () => {
  return (
    <>
      <AboutCatainer>

        <ImgContainer src="profile-img.jpg" />

        <SubContainer>
          <TitleContainer>
            다양한 경험을 통해 적응하는 개발자 홍소현입니다
          </TitleContainer>
          <TextContainer>
            <p>
              프로젝트를 통해 꾸준히 성장해나가는
              <PointText>주니어 개발자 홍소현</PointText>입니다.
            </p>
            <p>
              소프트웨어 개발 분야에서 지속적인 학습과 개선에 힘쓰고 있습니다.
            </p>
            <p>
              더불어 디자인적 감각을 활용하여 기술적인 측면에서 뿐만 아니라,
            </p>
            <p>
              <PointText>시각적으로도 매력적</PointText>이고
              <PointText>기능적인 제품</PointText>을 만들며,
            </p>
            <p>
              이를 통해<PointText> 사용자에게 가치 있는 경험</PointText>을 주는
              것이 목표입니다.
            </p>
          </TextContainer>
          <TitleContainer>🌟 Skill&Tools</TitleContainer>
          <StackContainer>
            <PointText>FrontEnd</PointText>
            <IconContainer>
              <img src="https://img.shields.io/badge/React-1572B6?style=flat-square&logo=React&logoColor=white" />
              <img src="https://img.shields.io/badge/TypeScript-8A2BE2?style=flat-square&logo=typescript&logoColor=white" />
              <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=white" />
              <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" />
            </IconContainer>
            <PointText>Design</PointText>
            <IconContainer>
              <img src="https://img.shields.io/badge/Figma-0C8CE9?style=flat-square&logo=figma&logoColor=white" />
              <img src="https://img.shields.io/badge/adobe%20illustrator-%23FF9A00.svg?style=flat-square&logo=adobe%20illustrator&logoColor=white" />
              <img src="https://img.shields.io/badge/adobe%20photoshop-%2331A8FF.svg?style=flat-square&logo=adobe%20photoshop&logoColor=white" />
            </IconContainer>
            <PointText>Tools</PointText>
            <IconContainer>
              <img src="https://img.shields.io/badge/Github-181717?style=flat-square&logo=github&logoColor=white" />
              <img src="https://img.shields.io/badge/Gitlab-FC6D26?style=flat-square&logo=gitlab&logoColor=white" />
              <img src="https://img.shields.io/badge/Notion-FFFFFF?style=flat-square&logo=notion&logoColor=black" />
            </IconContainer>
          </StackContainer>
        </SubContainer>
      </AboutCatainer>
    </>
  ); //추후 뷰 수정하기
};

export default About;

const AboutCatainer = styled.div`
  background-color: #786d95;
  height: 100vh; /* 화면 높이의 90%로 설정 */
  justify-content: center;
  align-items: center;
  gap: 30px;
  display: flex;
`;

const TextContainer = styled.div`
  line-height: 1.5em;
  margin-bottom: 20px;
`;
const StackContainer = styled.div`
  line-height: 1.5em;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const IconContainer = styled.div`
  display: flex;
  gap: 4px;
`;
const SubContainer = styled.div`
  color: #ffffffbe;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const PointText = styled.span`
  font-weight: 400;
  color: #ffffff;
`;
const TitleContainer = styled.p`
  color: white;
  font-weight: 700;
  font-size: x-large;
`;
const ImgContainer = styled.img`
  width: 20rem;
  filter: grayscale(20%);
  filter: brightness(120%);
  filter: blur(10000);
  filter: drop-shadow(6px 6px 9px #715987);
  border-radius: 20px;
  @keyframes imganim {
    from {
      transform: translate(-100px, 0px);
      opacity: 0;
    }
    to {
      transform: translate(0, 0);
      opacity: 1;
    }
  }
  animation: imganim 500ms ease-in forwards;
`;
