import React, { useState } from "react";
import InfiniteScroll from "../components/InfiniteScroll";
import Feed from "../components/Feed";

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
      title: "카페인바디",
      description: "",
      videoId: "VRWtdtGjWVQ?si=OEtxwyd4MMz9LPSR",
    },
    {
      id: 3,
      title: "카페인바디",
      description: "",
      videoId: "VRWtdtGjWVQ?si=OEtxwyd4MMz9LPSR",
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
      <InfiniteScroll fetchMore={fetchMoreData}>
        {portfolioItems.map((item, index) => (
          <Feed key={item.id} {...item} />
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default MainPage;
