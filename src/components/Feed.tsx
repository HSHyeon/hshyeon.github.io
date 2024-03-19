import YouTube from "react-youtube";
import styled from "styled-components";

interface FeedProps {
  title: string;
  description: string;
  videoId: string;
}

const Feed = ({ title, description, videoId }: FeedProps) => {
  return (
    <FeedContainer>
      <p>{title}</p>
      <YouTube videoId={videoId}></YouTube>
      <p>{description}</p>
    </FeedContainer>
  );
};

export default Feed;

const FeedContainer = styled.div`
  height: 50vh;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100vw;
  font-size: 20px;
  display: grid;
  box-sizing: border-box;
  padding: 20px;
  gap: 5px;
  font-weight: 600;
`;
