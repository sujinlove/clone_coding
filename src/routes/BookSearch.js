import React from "react";
import axios from "axios";
import SearchBook from "../components/SearchBook";
import "./Search.scss";

class BookSearch extends React.Component {
  state = {
    isLoading: true,
    hasSearch: false,
    books: [],
    value: ""
  };

  getSearchBook = async () => {
    const ID_KEY = "3qeEHqH6beiKz81p1B4L";
    const SECRET_KEY = "uvodiheH4o";
    const search = this.state.value;

    try {
      if (search === "") {
        this.setState({ books: [], isLoading: false, hasSearch: false });
        console.log("blank");
      } else {
        const {
          data: { items }
        } = await axios.get("/api/v1/search/book.json", {
          params: {
            query: search
          },
          headers: {
            "X-Naver-Client-Id": ID_KEY,
            "X-Naver-Client-Secret": SECRET_KEY
          }
        });
        console.log(items);
        this.setState({ books: items, isLoading: false });
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    // 네이버 도서 데이터 로딩!
    this.getSearchBook();
  }

  handleChange = (e: any) => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = (e: any) => {
    this.setState({ hasSearch: true });
    this.getSearchBook();
  };

  render() {
    const { isLoading, hasSearch, books } = this.state;
    let bookCount = this.state.books.length;

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
                <h2>도서 검색</h2>
                <input
                  className="input__search"
                  type="text"
                  value={this.state.value}
                  onChange={this.handleChange}
                  placeholder="도서를 검색해보세요"
                />
                <button type="submit" className="action secondary search">
                  검색
                </button>
              </div>
              <div className="search-count">
                {hasSearch && (
                  <span>총 {bookCount}건의 도서가 검색되었습니다.</span>
                )}
              </div>
              <div className="books">
                {books.map(book => (
                  <SearchBook
                    key={book.link}
                    id={book.link}
                    year={book.pubDate}
                    title={book.title}
                    poster={book.image}
                    author={book.author}
                    discount={book.discount}
                    price={book.price}
                    publisher={book.publisher}
                    description={book.description}
                    pubDate={book.pubdate}
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

export default BookSearch;
