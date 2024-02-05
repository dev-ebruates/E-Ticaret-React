import "./Gallery.css";
import productsData from "../../../data.json";
import { useState } from "react";

const Gallery = () => {
  const [activeImage, setActiveImage] = useState(productsData[0].img.thumbs[0]);

  return (
    <div className="product-gallery">
      <div className="single-image-wrapper">
        <img src={activeImage} id="single-image" alt="" />
      </div>
      <div className="product-thumb">
        <div className="glide__track" data-glide-el="track">
          <ol className="gallery-thumbs glide__slides">
            {productsData[0].img.thumbs.map((itemImg, index) => (
              <li
                key={index}
                className="glide__slide glide__slide--active"
                onClick={() => setActiveImage(itemImg)}
              >
                <img
                  src={itemImg}
                  alt=""
                  className={`img-fluid ${
                    itemImg === activeImage ? "active" : ""
                  }`}
                />
              </li>
            ))}
          </ol>
        </div>
        <div className="glide__arrows" data-glide-el="controls">
          <button
            className="glide__arrow glide__arrow--left"
            data-glide-dir="<"
          >
            <i className="bi bi-chevron-left"></i>
          </button>
          <button
            className="glide__arrow glide__arrow--right"
            data-glide-dir=">"
          >
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
