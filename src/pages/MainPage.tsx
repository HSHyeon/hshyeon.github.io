import { SectionsContainer, Section } from "react-fullpage";

import Header from "../components/Header";

import Intro from "../components/Intro";
import About from "../components/About";
import Works from "../components/Works";

const MainPage = () => {
  let options = {
    anchors: ["Intro", "About", "Works"],
    navigation: false, // use dots navigatio
    delay: 600, // the scroll animation speed
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
