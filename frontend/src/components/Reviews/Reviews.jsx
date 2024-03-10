import ReviewForm from "./ReviewForm";
import ReviewItem from "./ReviewItem";
import "./Reviews.css";
import PropTypes from "prop-types";

const Reviews = ({ activeTab, singleProduct }) => {
  return (
    <div
      className={`tab-panel-reviews  ${
        activeTab === "reviews" ? " content active" : "content"
      }`}
    >
      {singleProduct.reviews.lenght > 0 ? (
        <>
          {" "}
          <h3>2 reviews for Basic Colored Sweatpants With Elastic Hems</h3>
          <div className="comments">
            <ol className="comment-list">
              {singleProduct.reviews.map((item, index) => (
                <ReviewItem key={index} item={item} />
              ))}
            </ol>
          </div>
        </>
      ) : (
        <h3>Hiç yorum yok...</h3>
      )}

      <div className="review-form-wrapper">
        <h2>Add a review</h2>
        <ReviewForm />
      </div>
    </div>
  );
};

export default Reviews;
Reviews.propTypes = {
  activeTab: PropTypes.string,
  singleProduct: PropTypes.object,
};
