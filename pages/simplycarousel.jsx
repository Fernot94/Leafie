import { useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";

function CarouselSimples() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <div>
      <h3>Below you'll find some artworks that are dearest to me.</h3>
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
            itemsToShow: 2,
            itemsToScroll: 2,
            minWidth: 768,
          },
        ]}
        speed={400}
        easing="linear"
      >
        <div
          className="carouselImage"
          style={{ width: 300, height: 300, background: `url("/img/1.png")` }}
        ></div>
        <div
          className="carouselImage"
          style={{ width: 300, height: 300, background: `url("/img/2.png")` }}
        ></div>
        <div
          className="carouselImage"
          style={{ width: 300, height: 300, background: `url("/img/3.png")` }}
        ></div>
        <div
          className="carouselImage"
          style={{ width: 300, height: 300, background: `url("/img/4.png")` }}
        ></div>
        <div
          className="carouselImage"
          style={{ width: 300, height: 300, background: `url("/img/5.png")` }}
        ></div>
        <div
          className="carouselImage"
          style={{ width: 300, height: 300, background: `url("/img/6.png")` }}
        ></div>
        <div
          className="carouselImage"
          style={{ width: 300, height: 300, background: `url("/img/7.png")` }}
        ></div>
        <div
          className="carouselImage"
          style={{ width: 300, height: 300, background: `url("/img/8.png")` }}
        ></div>
        <div
          className="carouselImage"
          style={{ width: 300, height: 300, background: `url("/img/9.png")` }}
        ></div>
        <div
          className="carouselImage"
          style={{ width: 300, height: 300, background: `url("/img/10.png")` }}
        ></div>
        <div
          className="carouselImage"
          style={{ width: 300, height: 300, background: `url("/img/11.png")` }}
        ></div>
        <div
          className="carouselImage"
          style={{ width: 300, height: 300, background: `url("/img/12.png")` }}
        ></div>
        <div
          className="carouselImage"
          style={{ width: 300, height: 300, background: `url("/img/13.png")` }}
        ></div>
        <div
          className="carouselImage"
          style={{ width: 300, height: 300, background: `url("/img/14.png")` }}
        ></div>
        <div
          className="carouselImage"
          style={{ width: 300, height: 300, background: `url("/img/15.png")` }}
        ></div>
        <div
          className="carouselImage"
          style={{ width: 300, height: 300, background: `url("/img/16.png")` }}
        ></div>
        <div
          className="carouselImage"
          style={{ width: 300, height: 300, background: `url("/img/17.png")` }}
        ></div>
        <div
          className="carouselImage"
          style={{ width: 300, height: 300, background: `url("/img/18.png")` }}
        ></div>
        <div
          className="carouselImage"
          style={{ width: 300, height: 300, background: `url("/img/19.png")` }}
        ></div>
        <div
          className="carouselImage"
          style={{ width: 300, height: 300, background: `url("/img/20.png")` }}
        ></div>
        <div
          className="carouselImage"
          style={{ width: 300, height: 300, background: `url("/img/21.png")` }}
        ></div>
      </ReactSimplyCarousel>
    </div>
  );
}

export default CarouselSimples;
