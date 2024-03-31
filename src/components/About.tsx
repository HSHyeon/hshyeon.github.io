import styled from "styled-components";

const About = () => {
  return (
    <>
      <AboutCatainer>
        <ImgContainer src="profile.jpeg" />
        <SubContainer>
          <TitleContainer>
            다양한 경험을 통해 적응하는 개발자 홍소현입니다
          </TitleContainer>
          <TextContainer>
            <p>
              프로젝트를 통해 꾸준히 성장해나가는{" "}
              <PointText>주니어 개발자 홍소현</PointText>입니다.
            </p>
            <p>
              소프트웨어 개발 분야에서 지속적인 학습과 개선에 힘쓰고 있습니다.
            </p>
            <p>
              더불어 디자인적 감각을 활용하여 기술적인 측면에서 뿐만 아니라,
            </p>
            <p>
              <PointText>시각적으로도 매력적</PointText>이고{" "}
              <PointText>기능적인 제품</PointText>을 만들며,{" "}
            </p>
            <p>
              이를 통해<PointText> 사용자에게 가치 있는 경험</PointText>을 주는
              것이 목표입니다.
            </p>
          </TextContainer>
        </SubContainer>
      </AboutCatainer>
    </>
  );
};

export default About;

const AboutCatainer = styled.div`
  background-color: #b9a8c8;
  height: 100vh; /* 화면 높이의 90%로 설정 */
  justify-content: center;
  align-items: center;
  gap: 30px;
  display: flex;
`;

const TextContainer = styled.div`
  line-height: 1.5em;
`;
const SubContainer = styled.div`
  color: #dedfe7;
  display: flex;
  flex-direction: column;
  gap: 20px;

  align-content: space-between;
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
  width: 30vw;
  filter: grayscale(20%);
  filter: brightness(120%);
  filter: blur(10000);
  filter: drop-shadow(6px 6px 9px #9985ab);
  border-radius: 20px;
`;
