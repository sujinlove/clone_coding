import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Book.scss";

function SearchBook({
  id,
  year,
  title,
  poster,
  price,
  discount,
  pubDate,
  publisher,
  author,
  description
}) {
  return (
    <div className="book">
      <a href={id} title={title} target="_blank">
        <img src={poster} alt={title} title={title} />
        <div className="book__data">
          <h3 className="book__title">
            {title.replace(/<b>/gi, "").replace(/<\/b>/gi, "")}
          </h3>
          <p className="book__pubdate">
            <span>출판일</span> {pubDate}
          </p>
          <p className="book__director">
            <span>작가</span> {author}
          </p>
          <p className="book__actor">
            <span>출판사</span> {publisher}
          </p>
          <p className="book__actor">
            <span>가격</span> {price}
          </p>
          <p className="book__actor">
            <span>할인가격</span> {discount}
          </p>
          <p className="book__actor">
            <span>줄거리</span> {description}
          </p>
        </div>
      </a>
    </div>
  );
}

SearchBook.propTypes = {
  year: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  discount: PropTypes.number,
  pubDate: PropTypes.number.isRequired,
  publisher: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default SearchBook;
