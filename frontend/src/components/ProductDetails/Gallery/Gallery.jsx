import "./Gallery.css";
import productsData from "../../../data.json";
import { useState } from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";

function NextBtn({ onClick }) {
  return (
    <button
      className="glide__arrow glide__arrow--right"
      onClick={onClick}
      data-glide-dir=">"
      style={{
        zIndex:"2"
      }}
    >
      <i className="bi bi-chevron-right"></i>
    </button>
  );
}
function PrevBtn({ onClick }) {
  return (
    <button
      className="glide__arrow glide__arrow--left"
      onClick={onClick}
      data-glide-dir="<"
      style={{
        zIndex:"2"
      }}
    >
      <i className="bi bi-chevron-left"></i>
    </button>
  );
}
NextBtn.propTypes = {
  onClick: PropTypes.func,
};
PrevBtn.propTypes = {
  onClick: PropTypes.func,
};

const Gallery = () => {
  const [activeImage, setActiveImage] = useState(productsData[0].img.thumbs[0]);

  const sliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
  };

  return (
    <div className="product-gallery">
      <div className="single-image-wrapper">
        <img src={`/${activeImage}`} id="single-image" alt="" />
      </div>
      <div className="product-thumb">
        <div className="glide__track" data-glide-el="track">
          <ol className="gallery-thumbs glide__slides">
          
      <Slider {...sliderSettings}>
      {productsData[0].img.thumbs.map((itemImg, index) => (
              <li
                key={index}
                className="glide__slide glide__slide--active"
                onClick={() => setActiveImage(itemImg)}
              >
                <img
                //buradaki "/" yönlendirme için 
                  src={`/${itemImg}`}
                  alt=""
                  className={`img-fluid ${
                    itemImg === activeImage ? "active" : ""
                  }`}
                />
              </li>
            ))}
        </Slider>      
          </ol>
        </div>
        <div className="glide__arrows" data-glide-el="controls"></div>
        
        
      </div>
    </div>
  );
};

export default Gallery;
