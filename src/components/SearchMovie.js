import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function SearchMovie({ id, year, title, poster, rating }) {
  return (
    <div className="movie">
      <Link
        to={{
          pathname: "/search-detail",
          state: { id, year, title, poster, rating }
        }}
      >
        <img src={poster} alt={title} title={title} />
        <div className="movie__data">
          <h3 className="movie__title">{title}</h3>
          <h5 className="movie__year">{year}</h5>
        </div>
      </Link>
    </div>
  );
}

SearchMovie.propTypes = {
  year: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

export default SearchMovie;
