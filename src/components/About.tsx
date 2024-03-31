import styled from "styled-components";

const About = () => {
  return (
    <>
      <AboutCatainer>
        <TitleContainer>
          다양한 경험을 통해 빠르게 적응하는 개발자 홍소현입니다
        </TitleContainer>
        <SubContainer>
          <ImgContainer src="profile.jpg" />
          <TextContainer>
            <p>
              프로젝트를 통해 꾸준히 성장해나가는 주니어 개발자 홍소현입니다.
            </p>
            <p>
              소프트웨어 개발 분야에서 지속적인 학습과 개선에 힘쓰고 있습니다.
            </p>
            <p>
              더불어 디자인적 감각을 활용하여 기술적인 측면에서 뿐만 아니라,
            </p>
            <p>
              시각적으로도 매력적이고 기능적인 제품을 만들어내는 것이
              목표입니다.
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
  gap: 20px;
  display: flex;
  flex-direction: column;
`;

const TextContainer = styled.div`
  margin: 20px;
  line-height: 1.5em;
`;
const SubContainer = styled.div`
  margin: 20px;
  color: white;
  display: flex;
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
