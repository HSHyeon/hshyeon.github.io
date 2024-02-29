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
      <h2>{title}</h2>
      <YouTube videoId={videoId}></YouTube>
      <p>{description}</p>
    </FeedContainer>
  );
};

export default Feed;

const FeedContainer = styled.div`
  height: 50vh;
`;
