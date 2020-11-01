import React from "react";
import "./App.scss";
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Navigation from "./components/Navigation";
import Detail from "./routes/Detail";
import Search from "./routes/Search";
import SearchDetail from "./routes/SearchDetail";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie-detail" component={Detail} />
      <Route path="/search" component={Search} />
      <Route path="/search-detail" component={SearchDetail} />
    </HashRouter>
  );
}

export default App;
