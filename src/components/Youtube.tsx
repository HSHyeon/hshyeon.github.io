import YouTube from "react-youtube";
import styled from "styled-components";

interface YoutubeProps {
  title: string;
  description: string;
  videoId: string;
}

const Youtube = ({ title, description, videoId }: YoutubeProps) => {
  const opts = {
    width: "100%",
    height: "100%",
  };

  return (
    <YouTubeContainer>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <YouTube videoId={videoId} opts={opts} />
      </div>
    </YouTubeContainer>
  );
};

export default Youtube;
const YouTubeContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
  margin: auto;
  & > div {
    gap: 10px;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 100%;
    p {
      font-size: small;
      font-weight: 300;
    }
    iframe {
      height: 42vw;
      max-height: 70%;
      border: none;
      flex: 1;
      flex-shrink: 1;
    }
  }

  @media (max-width: 768px) {
    font-size: small;
    & > div {
      gap: 5px;
      iframe {
      height: 60vw;
      border: none;
      flex: 1;
      flex-shrink: 1;
    }
    }
  }
`;
