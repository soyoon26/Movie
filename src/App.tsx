import React from "react";
import logo from "./yoon_logo.png";
import "./App.css";
import Popular from "./components/Popular";
import TopRank from "./components/TopRank";

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <header className="App-header">
        <div>Yoonflix 인기 콘텐츠</div>
        <Popular />
        <div>지금 뜨는 콘텐츠</div>
        <TopRank />
      </header>
    </div>
  );
}

export default App;
