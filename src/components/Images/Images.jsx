import SingleImage from "../SingleImage/SingleImage";
import "./images.css";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import PuffLoader from "react-spinners/PuffLoader";

const Images = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);
  const fetchimages = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=uSx2Df45Xgfgf6PnGLiANGUUiOO2RViR8fjteRiq&count=100`
      );
      setImages(res.data);
      console.log(res.data);
      setLoading(false);
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
            Click to discover
          </button>
        </div>
      </div>
      <div className="imagesWrapper">
        {loading ? (
          <div className="loaderContainer" ref={scrollRef}>
            <h1 className="loaderText">Fetching Photos...</h1>
            <PuffLoader className="loader" color={"#ffffff"} size={200} />
          </div>
        ) : (
          <div className="imagesContainer" ref={scrollRef}>
            {images.map((image) => {
              return <SingleImage image={image} key={image} />;
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Images;
