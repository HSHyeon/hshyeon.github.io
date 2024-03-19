import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

interface InfiniteScrollProps {
  children: React.ReactNode; // 이미지 URL 배열
  fetchMore: () => void; // 추가 데이터를 가져오는 함수
}

const InfiniteScroll = ({ fetchMore, children }: InfiniteScrollProps) => {
  const [isEndOfContainer, setIsEndOfContainer] = useState<boolean>(false); // 가로 스크롤이 끝에 도달했는지 여부
  const [prevIsEndOfContainer, setPrevIsEndOfContainer] =
    useState<boolean>(false); // 이전 가로 스크롤이 끝에 도달했는지 여부
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (container) {
        const isEndOfContainer =
          container.scrollLeft + container.clientWidth ===
          container.scrollWidth;
        setIsEndOfContainer(isEndOfContainer);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    if (isEndOfContainer && !prevIsEndOfContainer) {
      fetchMore();
    }
    setPrevIsEndOfContainer(isEndOfContainer);
  }, [isEndOfContainer, prevIsEndOfContainer, fetchMore]);

  return (
    <ScrollContainer ref={containerRef}>
      <ScrollContent>{children}</ScrollContent>
      {/* Intersection Observer의 타겟 요소 */}
    </ScrollContainer>
  );
};

export default InfiniteScroll;

const ScrollContainer = styled.div`
  width: 100%;
  overflow-x: auto; /* 가로 스크롤 활성화 */
  white-space: nowrap; /* 자식 요소가 가로로 나란히 위치하도록 설정 */
`;

const ScrollContent = styled.div`
  display: flex; /* 자식 요소가 가로로 나란히 위치하도록 설정 */
`;
