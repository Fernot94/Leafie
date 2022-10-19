import { useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";

function CarouselSimples() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <div>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
          //here you can also pass className, or any other button element attributes
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
          //here you can also pass className, or any other button element attributes
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
        {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
        <div
          className="carouselImage"
          style={{ width: 300, height: 300, background: `url("/img/1.png")` }}
        >
          <p style={{}}>Barrel Chair</p>
        </div>
        <div
          className="carouselImage"
          style={{ width: 300, height: 300, background: `url("/img/2.png")` }}
        >
          <p>Cap Lamp</p>
        </div>
        <div
          className="carouselImage"
          style={{ width: 300, height: 300, background: `url("/img/3.png")` }}
        >
          <p>Tennis Seat</p>
        </div>
        <div
          className="carouselImage"
          style={{ width: 300, height: 300, background: `url("/img/4.png")` }}
        >
          <p>Vinyl Seat</p>
        </div>
        <div
          className="carouselImage"
          style={{ width: 300, height: 300, background: `url("/img/5.png")` }}
        >
          <p>Canned Booth</p>
        </div>
        <div
          className="carouselImage"
          style={{ width: 300, height: 300, background: `url("/img/6.png")` }}
        >
          <p>Cardboard Couch</p>
        </div>
        <div
          className="carouselImage"
          style={{ width: 300, height: 300, background: `url("/img/7.png")` }}
        >
          <p>Bottled Table</p>
        </div>
        <div
          className="carouselImage"
          style={{ width: 300, height: 300, background: `url("/img/8.png")` }}
        >
          <p>Rustic Table</p>
        </div>
        <div
          className="carouselImage"
          style={{ width: 300, height: 300, background: `url("/img/9.png")` }}
        >
          <p>Farm Chair</p>
        </div>
        <div
          className="carouselImage"
          style={{ width: 300, height: 300, background: `url("/img/10.png")` }}
        >
          <p>Great Lamp</p>
        </div>
        <div
          className="carouselImage"
          style={{ width: 300, height: 300, background: `url("/img/11.png")` }}
        >
          <p>Capped Basket</p>
        </div>
        <div
          className="carouselImage"
          style={{ width: 300, height: 300, background: `url("/img/12.png")` }}
        >
          <p>Canned Mirror</p>
        </div>
        <div
          className="carouselImage"
          style={{ width: 300, height: 300, background: `url("/img/13.png")` }}
        >
          <p>Canned Cup</p>
        </div>
        <div
          className="carouselImage"
          style={{ width: 300, height: 300, background: `url("/img/14.png")` }}
        >
          <p>Barrel Cradle</p>
        </div>
        <div
          className="carouselImage"
          style={{ width: 300, height: 300, background: `url("/img/15.png")` }}
        >
          <p>Booked Seat</p>
        </div>
        <div
          className="carouselImage"
          style={{ width: 300, height: 300, background: `url("/img/16.png")` }}
        >
          <p>Creative Chairs & Table</p>
        </div>
        <div
          className="carouselImage"
          style={{ width: 300, height: 300, background: `url("/img/17.png")` }}
        >
          <p>Pallet Couch</p>
        </div>
        <div
          className="carouselImage"
          style={{ width: 300, height: 300, background: `url("/img/18.png")` }}
        >
          <p>Tubed Table</p>
        </div>
        <div
          className="carouselImage"
          style={{ width: 300, height: 300, background: `url("/img/19.png")` }}
        >
          <p>Canned Ceiling Lamp</p>
        </div>
        <div
          className="carouselImage"
          style={{ width: 300, height: 300, background: `url("/img/20.png")` }}
        >
          <p>Capped Mirror</p>
        </div>
        <div
          className="carouselImage"
          style={{ width: 300, height: 300, background: `url("/img/21.png")` }}
        >
          <p>Pallet Bed</p>
        </div>
      </ReactSimplyCarousel>
    </div>
  );
}

export default CarouselSimples;
