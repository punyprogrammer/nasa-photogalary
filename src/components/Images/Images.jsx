import SingleImage from "../SingleImage/SingleImage";
import "./images.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Images = () => {
  const [images, setImages] = useState([]);
  const fetchimages = async () => {
    try {
      const res = await axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=uSx2Df45Xgfgf6PnGLiANGUUiOO2RViR8fjteRiq&count=100`
      );
      setImages(res.data);
      console.log(res.data);
    } catch (error) {}
  };
  useEffect(() => {
    fetchimages();
  }, []);
  return (
    <div className="imagesWrapper">
      <div className="imagesContainer">
        {images.map((image) => {
          return <SingleImage image={image} key={image} />;
        })}
      </div>
    </div>
  );
};

export default Images;
