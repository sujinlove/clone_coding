import React from "react";

class SearchDetail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;

    if (location.state === undefined) {
      // state가 없는 경우
      history.push("/"); // '/' home으로 이동
    }
  }

  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <div className="movie-detail-container">
          <div className="page-title-container">
            <h1 className="page-title movie-title">
              {location.state.title} ( {location.state.year} )
            </h1>
          </div>
          <div className="movie-deatil">
            <div class="movie-content poster">
              <img
                src={location.state.poster}
                alt={location.state.title}
                title={location.state.title}
              />
            </div>
            <div className="movie-content rating">
              <span className="content-title">Rating : </span>
              <br />
              <p>{location.state.rating}</p>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default SearchDetail;
