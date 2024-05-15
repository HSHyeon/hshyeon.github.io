import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Feed from "../components/Feed";
import data from "../data.json";
import { CiDesktopMouse1 } from "react-icons/ci";
import styled from "styled-components";

const Works = () => {
  const settings = {
    centerMode: true,
    centerPadding: "60px",
    dots: true,
    infinite: true,
    speed: 500,

    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <>
      <WorksContainer>
        <SliderContainer>
          <CiDesktopMouse1 size={"30"} color="#ffffffc6" />
          <Slider {...settings}>
            {data.map((item) => (
              <div key={item.id}>
                <Feed {...item} />
              </div>
            ))}
          </Slider>
        </SliderContainer>
      </WorksContainer>
    </>
  );
};

export default Works;
const WorksContainer = styled.div`
  background-color: #685c86;
  height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
`;
const SliderContainer = styled.div`
  width: 80vw;
  box-sizing: border-box;
  margin: 0 auto;
  color: white;
  .slick-dots {
    button::before {
      color: #e9e9e9;
    }

    .slick-active {
      button::before {
        color: #c1c1c1;
      }
    }
  }
`;
