import React from "react";
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  getMoives = async () => {
    // const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    const {
      data: {
        data: { movies }
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    // this.setState({ movies: movies });
    //console.log(movies);
    this.setState({ movies, isLoading: false }); // ES6에서는 객체의 키와 대입할 변수의 이름이 같으면, 코드를 축약할 수 있다.
  };

  componentDidMount() {
    // 영화 데이터 로딩!
    this.getMoives();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <div>
        {isLoading
          ? "Loading..."
          : movies.map(movie => {
              console.log(movie);
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                />
              );
            })}
      </div>
    );
  }
}

export default App;
