import ReactFullpage, { fullpageOptions } from "@fullpage/react-fullpage";
import Header from "../components/Header";
import Intro from "../components/Intro";
import About from "../components/About";
import Works from "../components/Works";
import Contact from "../components/Contact";

//import { useState } from "react";

interface Section {}

type Credits = {
  enabled?: boolean;
  label?: string;
  position?: "left" | "right";
};
const pluginWrapper = () => {};

const MainPage = () => {
  const onLeave = (origin: any, destination: any, direction: any) => {
    console.log("onLeave", { origin, destination, direction });
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
        anchors={["Intro", "About", "Works"]}
        render={({ fullpageApi }) => (
          <ReactFullpage.Wrapper>
            <div className="section">
              <Intro />
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
