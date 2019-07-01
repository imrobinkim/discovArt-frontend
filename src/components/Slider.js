import React from "react";
import SmartSlider from "react-smart-slider";

// import "./styles.css";

function Slider() {
  const slidesArray = [
    {
      url: "https://i.imgur.com/7u8i7L1.jpg"
    },
    {
      url: "https://i.imgur.com/E8gkF2f.jpg"
    },
    {
      url: "https://i.imgur.com/t2a1zLi.jpg",

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
