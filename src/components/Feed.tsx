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
  text-align: center;
  color: white;
  font-size: 20px;
  display: grid;
  box-sizing: border-box;
  gap: 15px;
  align-items: center;
  justify-content: center;

  font-weight: 600;
`;
