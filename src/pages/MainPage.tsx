import { SectionsContainer, Section } from "react-fullpage";
import Header from "../components/Header";
import Intro from "../components/Intro";
import About from "../components/About";
import Works from "../components/Works";
//import { useState } from "react";

const MainPage = () => {
  //const [activeSection, setActiveSection] = useState(2);
  //const handleSetActive = (to: string) => {
  //setActiveSection(Number(to)); // 해당 섹션의 인덱스를 활성화된 섹션으로 설정
  //TODO 새로고침했을 때 이상한 페이지로 튀는 에러 발견
  //아무래도 몇번째 앵커인지를 인지하지 못해 나타나는 현상같음 수정하기
  //};
  let options = {
    anchors: ["Intro", "About", "Works"],
    navigation: false,
    delay: 600,
    //activeSection: activeSection, // 현재 활성화된 섹션 설정
  };

  return (
    <div>
      <Header />
      <SectionsContainer {...options}>
        <Section>
          <Intro />
        </Section>
        <Section>
          <About />
        </Section>
        <Section>
          <Works />
        </Section>
      </SectionsContainer>
    </div>
  );
};

export default MainPage;
