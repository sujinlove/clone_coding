import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function SearchMovie({ id, year, title, poster, rating, director, actor }) {
  return (
    <div className="movie">
      <a href={id} title={title} target="_blank">
        <img src={poster} alt={title} title={title} />
        <div className="movie__data">
          <h3 className="movie__title">
            {title.replace(/<b>/gi, "").replace(/<\/b>/gi, "")}
          </h3>
          <p className="movie__year">
            <span>개봉일</span> {year}
          </p>
          <p className="movie__rating">
            <span>평점</span> {rating}/10
          </p>
          <p className="movie__director">
            <span>감독</span> {director}
          </p>
          <p className="movie__actor">
            <span>배우</span> {actor}
          </p>
        </div>
      </a>
    </div>
  );
}

SearchMovie.propTypes = {
  year: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  director: PropTypes.string.isRequired,
  actor: PropTypes.string.isRequired
};

export default SearchMovie;
