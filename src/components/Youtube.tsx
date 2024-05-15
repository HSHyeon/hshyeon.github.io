import React from "react";
import YouTube from "react-youtube";
import styled from "styled-components";

interface YoutubeProps {
  title: string;
  description: string;
  videoId: string;
}

const Youtube: React.FC<YoutubeProps> = ({ title, description, videoId }) => {
  const opts = {
    width: "500", // YouTube 플레이어의 가로 크기
    height: "350", // YouTube 플레이어의 세로 크기
  };

  return (
    <YouTubeContainer>
      <h2>{title}</h2>
      <p>{description}</p>
      <YouTube videoId={videoId} opts={opts} />
    </YouTubeContainer>
  );
};

export default Youtube;
const YouTubeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
