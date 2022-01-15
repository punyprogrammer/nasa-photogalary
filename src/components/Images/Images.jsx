import SingleImage from "../SingleImage/SingleImage";
import "./images.css";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

const Images = () => {
  const [images, setImages] = useState([]);
  const scrollRef = useRef(null);
  const fetchimages = async () => {
    try {
      const res = await axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=uSx2Df45Xgfgf6PnGLiANGUUiOO2RViR8fjteRiq&count=10`
      );
      setImages(res.data);
      console.log(res.data);
    } catch (error) {}
  };
  const scrollDown = () => {
    console.log("scroll down");
    scrollRef?.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    fetchimages();
  }, []);
  return (
    <>
      <div className="headerWrapper">
        <div className="headingContainer">
          <h1 className="headingTitle">Explore the Space</h1>
          <h1 className="headingSubtitle">Cause there is a world beyond</h1>
          <button className="exploreMore" onClick={scrollDown}>
            DISCOVER MORE
          </button>
        </div>
      </div>
      <div className="imagesWrapper">
        <div className="filterContainer" ref={scrollRef}>
          <h1 className="filterHeading">FILTER:</h1>
          <input type="date" className="dateInput" />
          <input type="date" className="dateInput" />
        </div>
        <div className="imagesContainer">
          {images.map((image) => {
            return <SingleImage image={image} key={image} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Images;
