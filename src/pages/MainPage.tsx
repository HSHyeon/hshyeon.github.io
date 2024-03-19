import { useState } from "react";
import { SectionsContainer, Section } from "react-fullpage";
import InfiniteScroll from "../components/InfiniteScroll";
import Feed from "../components/Feed";
import Header from "../components/Header";
import data from "../data.json";
import Intro from "../components/Intro";
import About from "../components/About";

const MainPage = () => {
  const [portfolioItems, setPortfolioItems] = useState<any[]>(data);

  let options = {
    anchors: ["Intro", "About", "Works"],
    navigation: false, // use dots navigatio
    delay: 600, // the scroll animation speed
  };
  const fetchMoreData = () => {
    // 다음 아이템의 인덱스를 계산합니다.
    const nextIndex = portfolioItems.length % data.length;
    // 다음 아이템을 가져와 새로운 아이템으로 추가합니다.
    const newItem = {
      id: portfolioItems.length + 1,
      title: portfolioItems[nextIndex].title,
      // title: `새로운 아이템 ${portfolioItems.length + 1}`,
      description: "",
      videoId: portfolioItems[nextIndex].videoId, // 다음 아이템의 videoId를 사용합니다.
    };
    setPortfolioItems((prevItems) => [...prevItems, newItem]);
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
          <InfiniteScroll fetchMore={fetchMoreData}>
            {portfolioItems.map((item) => (
              <Feed key={item.id} {...item} />
            ))}
          </InfiniteScroll>
        </Section>
      </SectionsContainer>
    </div>
  );
};

export default MainPage;
