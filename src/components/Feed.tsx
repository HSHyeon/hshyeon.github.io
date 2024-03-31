import { useState } from "react";
import styled from "styled-components";
import YouTube from "react-youtube";
import Youtube from "./Youtube";

interface FeedProps {
  title: string;
  description: string;
  videoId: string;
  src: string;
}

const Feed: React.FC<FeedProps> = ({ title, description, videoId, src }) => {
  const [hovered, setHovered] = useState(false);

  const handleHover = (isHovered: boolean) => {
    setHovered(isHovered);
  };

  return (
    <FeedContainer
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
    >
      <ImgContainer src={src} />
      {hovered && (
        <PopupBackground>
          <Youtube title={title} description={description} videoId={videoId} />
        </PopupBackground>
      )}
    </FeedContainer>
  );
};

export default Feed;

const FeedContainer = styled.div`
  text-align: center;
  color: white;
  font-size: 20px;
  display: grid;
  height: 70vh;
  box-sizing: border-box;
  gap: 20px;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  position: relative; // 하위 요소의 위치를 상대적으로 설정
`;

const ImgContainer = styled.img`
  width: 60vw;
  border-radius: 10px;
  filter: drop-shadow(6px 6px 9px #615381);
`;

const PopupBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7); // 어두운 배경색
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
`;
