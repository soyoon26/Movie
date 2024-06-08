import React from "react";
import logo from "./yoon_logo.png";
import "./App.css";
import Popular from "./components/Popular";
import TopRank from "./components/TopRank";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <div className="App-main"></div>

      <div className="App-content">
        <div className="Content-title">Yoonflix 인기 콘텐츠</div>
        <Popular />
      </div>
      <div className="App-content">
        <div className="Content-title">지금 뜨는 콘텐츠</div>
        <TopRank />
      </div>
      <Footer />
    </div>
  );
}

export default App;
