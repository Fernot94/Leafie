import { useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";

function CarouselSimples() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const imagesList = [
    "/img/1.png",
    "/img/2.png",
    "/img/3.png",
    "/img/4.png",
    "/img/5.png",
    "/img/6.png",
    "/img/7.png",
    "/img/8.png",
    "/img/10.png",
    "/img/11.png",
    "/img/12.png",
    "/img/13.png",
    "/img/14.png",
    "/img/15.png",
    "/img/16.png",
    "/img/17.png",
    "/img/18.png",
    "/img/19.png",
    "/img/20.png",
    "/img/21.png",
  ];

  return (
    <div>
      <h3>Examples of the Art you will find in this event.</h3>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
          style: {
            alignSelf: "center",
            background: "black",
            border: "none",
            borderRadius: "50%",
            color: "white",
            cursor: "pointer",
            fontSize: "20px",
            height: 30,
            lineHeight: 1,
            textAlign: "center",
            width: 30,
          },
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          style: {
            alignSelf: "center",
            background: "black",
            border: "none",
            borderRadius: "50%",
            color: "white",
            cursor: "pointer",
            fontSize: "20px",
            height: 30,
            lineHeight: 1,
            textAlign: "center",
            width: 30,
          },
          children: <span>{`<`}</span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 1,
            itemsToScroll: 1,
            minWidth: 768,
          },
        ]}
        speed={400}
        easing="linear"
      >
        {imagesList.map((el, index) => {
          return (
            <div
              key={index}
              className="carouselImage"
              style={{ width: 300, height: 300, background: `url("${el}")` }}
            ></div>
          );
        })}
      </ReactSimplyCarousel>
    </div>
  );
}

export default CarouselSimples;
