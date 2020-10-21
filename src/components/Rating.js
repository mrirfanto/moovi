import React from "react";
import PropTypes from "prop-types";

const Rating = ({ rating, voteCount }) => {
  return (
    <div className="rating">
      <span>
        <i
          className={
            rating >= 2
              ? "fas fa-star"
              : rating >= 1.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        />
      </span>
      <span>
        <i
          className={
            rating >= 4
              ? "fas fa-star"
              : rating >= 3.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        />
      </span>
      <span>
        <i
          className={
            rating >= 6
              ? "fas fa-star"
              : rating >= 5.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        />
      </span>
      <span>
        <i
          className={
            rating >= 8
              ? "fas fa-star"
              : rating >= 7.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        />
      </span>
      <span>
        <i
          className={
            rating >= 10
              ? "fas fa-star"
              : rating >= 9.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        />
      </span>
      <span className="rating__value">{rating}</span>
      <div>{`${voteCount} votes`}</div>
    </div>
  );
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
