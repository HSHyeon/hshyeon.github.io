import React, { useEffect, useRef } from "react";
import styled from "styled-components";

interface InfiniteScrollProps {
  children: React.ReactNode;
  fetchMore: () => void; // 추가 데이터를 가져오는 함수
}

const InfiniteScroll = ({ fetchMore, children }: InfiniteScrollProps) => {
  const sentinelRef = useRef<HTMLDivElement>(null); // 스크롤을 감지할 요소의 ref

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // 스크롤이 교차되면 fetchMore 함수 호출
            fetchMore();
          }
        });
      },
      { threshold: 1 } // 요소가 100% 노출될 때 교차되도록 설정
    );

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current); // 요소를 관찰
    }

    return () => {
      if (sentinelRef.current) {
        observer.unobserve(sentinelRef.current); // 컴포넌트가 언마운트될 때 관찰 해제
      }
    };
  }, [fetchMore]);

  return (
    <>
      <ScrollContainer>
        {children}
        <div ref={sentinelRef}></div> {/* Intersection Observer의 타겟 요소 */}
      </ScrollContainer>
    </>
  );
};

export default InfiniteScroll;
const ScrollContainer = styled.div`
  width: 100vw;
`;
