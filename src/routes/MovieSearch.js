import React from "react";
import axios from "axios";
import SearchMovie from "../components/SearchMovie";
import "./Search.scss";

class MovieSearch extends React.Component {
  state = {
    isLoading: true,
    hasSearch: false,
    movies: [],
    value: ""
  };

  getSearchMovie = async () => {
    const ID_KEY = "3qeEHqH6beiKz81p1B4L";
    const SECRET_KEY = "uvodiheH4o";
    const search = this.state.value;

    try {
      if (search === "") {
        this.setState({ movies: [], isLoading: false, hasSearch: false });
      } else {
        const {
          data: { items }
        } = await axios.get("/api/v1/search/movie.json", {
          params: {
            query: search
          },
          headers: {
            "X-Naver-Client-Id": ID_KEY,
            "X-Naver-Client-Secret": SECRET_KEY
          }
        });
        this.setState({ movies: items, isLoading: false });
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    // 네이버 영화 데이터 로딩!
    this.getSearchMovie();
  }

  handleChange = (e: any) => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = (e: any) => {
    this.setState({ hasSearch: true });
    this.getSearchMovie();
  };

  render() {
    const { isLoading, hasSearch, movies } = this.state;
    let movieCount = this.state.movies.length;

    return (
      <section className="container search">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <form onSubmit={this.handleSubmit} className="search-form">
            <div className="search-wrapper">
              <div className="input__div">
                <h2>영화 검색</h2>
                <input
                  className="input__search"
                  type="text"
                  value={this.state.value}
                  onChange={this.handleChange}
                  placeholder="영화를 검색해보세요"
                />
                <button type="submit" className="action primary search">
                  검색
                </button>
              </div>
              <div className="search-count">
                {hasSearch && (
                  <span>총 {movieCount}건의 영화가 검색되었습니다.</span>
                )}
              </div>
              <div className="movies">
                {movies.map(movie => (
                  <SearchMovie
                    key={movie.link}
                    id={movie.link}
                    year={movie.pubDate}
                    title={movie.title}
                    poster={movie.image}
                    rating={movie.userRating}
                    director={movie.director}
                    actor={movie.actor}
                  />
                ))}
              </div>
            </div>
          </form>
        )}
      </section>
    );
  }
}

export default MovieSearch;
