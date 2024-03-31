import ReactFullpage, { fullpageOptions } from "@fullpage/react-fullpage";
import Header from "../components/Header";
import Intro from "../components/Intro";
import About from "../components/About";
import Works from "../components/Works";
import Contact from "../components/Contact";
import { useState } from "react";

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

  const handleAfterLoad = (
    _origin: any,
    destination: Section,
    _direction: any
  ) => {
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
        render={({}) => (
          <ReactFullpage.Wrapper>
            <div className="section">
              <Intro animate={animate} />
            </div>
            <div className="section">
              <About />
            </div>
            <div className="section">
              <Works />
            </div>
            <div className="section fp-auto-height">
              <Contact />
            </div>
          </ReactFullpage.Wrapper>
        )}
      />
    </div>
  );
};

export default MainPage;
