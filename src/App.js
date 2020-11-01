import React from "react";
import "./App.scss";
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Navigation from "./components/Navigation";
import Detail from "./routes/Detail";
import MovieSearch from "./routes/MovieSearch";
import SearchDetail from "./routes/SearchDetail";
import BookSearch from "./routes/BookSearch";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={MovieSearch} />
      <Route path="/movie-search" component={MovieSearch} />
      <Route path="/book-search" component={BookSearch} />
      <Route path="/about" component={About} />
    </HashRouter>
  );
}

export default App;
