import { useState } from "react";
import InfiniteScroll from "../components/InfiniteScroll";
import Feed from "../components/Feed";
import Header from "../components/Header";

const MainPage = () => {
  const [portfolioItems, setPortfolioItems] = useState<any[]>([
    {
      id: 1,
      title: "카페인바디",
      description: "",
      videoId: "VRWtdtGjWVQ?si=OEtxwyd4MMz9LPSR",
    },
    {
      id: 2,
      title: "멍뭉",
      description: "",
      videoId: "E1d7rm-J-3I",
    },
    {
      id: 3,
      title: "스페이스테이션",
      description: "",
      videoId: "hQIpURB7SEY",
    },
  ]);

  const fetchMoreData = () => {
    // 새로운 아이템을 생성하여 기존 데이터에 추가하는 방식으로 구현
    const newItem = {
      id: portfolioItems.length + 1,
      title: `새로운 아이템 ${portfolioItems.length + 1}`,
      description: "",
      videoId: "VRWtdtGjWVQ?si=OEtxwyd4MMz9LPSR",
    };
    setPortfolioItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <div>
      <Header />
      <InfiniteScroll fetchMore={fetchMoreData}>
        {portfolioItems.map((item) => (
          <Feed key={item.id} {...item} />
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default MainPage;
