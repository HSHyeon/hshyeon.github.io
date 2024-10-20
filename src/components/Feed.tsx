import { useState } from "react";
import styled from "styled-components";
import Youtube from "./Youtube";

interface FeedProps {
  title: string;
  description: string;
  videoId: string;
  src: string;
}

const Feed = ({ title, description, videoId, src }: FeedProps) => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive((prev) => !prev);
  };

  const handleMouseEnter = () => {
    setIsActive(true); // 마우스가 올려졌을 때 활성화
  };

  const handleMouseLeave = () => {
    setIsActive(false); // 마우스가 떠났을 때 비활성화
  };

  return (
    <FeedContainer
      onClick={handleToggle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ImgContainer src={src} />
      <PopupBackground className={isActive ? "show" : ""}>
        {isActive && (
          <Youtube title={title} description={description} videoId={videoId} />
        )}
      </PopupBackground>
    </FeedContainer>
  );
};

export default Feed;

const FeedContainer = styled.div`
  text-align: center;
  color: white;
  font-size: 20px;
  display: grid;
  height: 100%;
  padding: 3rem;
  box-sizing: border-box;
  gap: 20px;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  position: relative;

  @media (max-width: 768px) {
    padding: 2rem 1rem; // 모바일 여백 조정
    gap: 15px; // 모바일에서의 요소 간격 줄이기
    font-size: 18px; // 모바일에서 폰트 크기 조정
  }
`;

const ImgContainer = styled.img`
  width: 60vw;
  border-radius: 10px;
  filter: drop-shadow(6px 6px 9px #615381);

  @media (max-width: 768px) {
    width: 80vw; // 모바일에서 이미지 크기 조정
    border-radius: 5px; // 모바일에서 모서리 반경 조정
  }
`;

const PopupBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0; // 기본적으로 투명하게 설정
  transition: opacity 0.5s ease;

  &.show {
    opacity: 1; // 애니메이션 효과를 주기 위해 opacity를 변경
  }
`;
