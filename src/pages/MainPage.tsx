import ReactFullpage from "@fullpage/react-fullpage";
import Header from "../components/Header";
import Intro from "./Intro";
import About from "./About";
import Works from "./Works";
import Contact from "./Contact";
import { useState } from "react";
import styled from "styled-components";

interface Section {
  index: number;
}

type Credits = {
  enabled?: boolean;
  label?: string;
  position?: "left" | "right";
};

const MainPage = () => {
  const [animate, setAnimate] = useState(false);

  const handleAfterLoad = (destination: Section) => {
    // 첫 번째 섹션이 로드될 때 애니메이션을 시작합니다.
    if (destination.index === 0) {
      setAnimate(true);
    } else {
      setAnimate(false);
    }
  };

  const credits: Credits = {
    enabled: true,
    label: "",
    position: "right",
  };

  return (
    <div>
      <Header />
      <ReactFullpage
        licenseKey={"KNXF6-QO9NI-YH0AI-7I377-OOOYM"}
        credits={credits}
        afterLoad={handleAfterLoad}
        anchors={["Intro", "About", "Works"]}
        render={() => (
          <ReactFullpage.Wrapper>
            <SectionContainer className="section">
              <Intro animate={animate} />
            </SectionContainer>
            <SectionContainer className="section">
              <About animate={animate} />
            </SectionContainer>
            <SectionContainer className="section">
              <Works />
            </SectionContainer>
            <SectionContainer className="section fp-auto-height">
              <Contact />
            </SectionContainer>
          </ReactFullpage.Wrapper>
        )}
      />
    </div>
  );
};

export default MainPage;
const SectionContainer = styled.div`
  height: 100%;
  width: 100%;
`;
