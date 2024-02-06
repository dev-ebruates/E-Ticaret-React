import ReviewForm from "./ReviewForm";
import ReviewItem from "./ReviewItem";
import "./Reviews.css";
import PropTypes from "prop-types";

const Reviews = ({ activeTab }) => {
  return (
    <div
      className={`tab-panel-reviews  ${
        activeTab === "reviews" ? " content active" : "content"
      }`}
    >
      <h3>2 reviews for Basic Colored Sweatpants With Elastic Hems</h3>
      <div className="comments">
        <ol className="comment-list">
          <ReviewItem />
          <ReviewItem />
          <ReviewItem />
        </ol>

        <div className="review-form-wrapper">
          <h2>Add a review</h2>
          <ReviewForm />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
Reviews.propTypes = {
  activeTab: PropTypes.string,
};
