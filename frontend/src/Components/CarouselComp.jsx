  import React from "react";
  import t1 from "../assets/T1.png";
  import t2 from "../assets/t2.png";
  import t3 from "../assets/t3.png";
  import t4 from "../assets/t7.png";
  import t5 from "../assets/t5.png";
  import t6 from "../assets/t6.png";
  import { Carousel } from "@trendyol-js/react-carousel";
  const CarouselComp = () => {
    return (
      <div className="mt-[200px]">
      <h1 className="text-center text-2xl text-fuchsia-300 anton my-4 ">Your Favorite Fan Theoreies!!!!!!!!!!!</h1>
      <Carousel show={3.5} slide={3} swiping={true} leftArrow={true} rightArrow={true}>
        <img src={t1}
        
          alt=""
          width="400px"
          className=" rounded-lg first-letter:"
        />
        <img src={t2} alt="" width="400px" className="rounded-lg " />
        <img src={t3} alt="" width="400px " className=" rounded-lg" />
        <img src={t4} alt="" width="400px"className=" rounded-lg "/>
              <img src={t5} alt="" width="400px"className=" rounded-lg"/>
              <img src={t6} alt="" width="400px"className=" rounded-lg "/>
      </Carousel>
      </div>
    );
  };

  export default CarouselComp;
