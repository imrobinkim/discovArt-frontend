import React from "react";
import SmartSlider from "react-smart-slider";

// import "./styles.css";

function Slider() {
  const slidesArray = [
    {
      url: "https://static.thewalters.org/images/PS1_37.1109_Fnt_DD_T13.jpg"
    },
    {
      url: "https://static.thewalters.org/images/PS1_TL.2010.3.13_VwA_DD_T10.jpg"
    },
    {
      url: "https://static.thewalters.org/images/PS1_37.38_Fnt_DD_T09.jpg",

      // Set this key, if you want to update style for specific slide caption
      customCaptionStyle: {
        color: "#7fffd4",
        fontWeight: "bold"
      }
    }
  ];
  return (
    <div className="Slider">
      <SmartSlider
        slides={slidesArray}
        autoSlide={true}
        buttonShape="square" // round or square
      />
    </div>
  );
}

export default Slider;
