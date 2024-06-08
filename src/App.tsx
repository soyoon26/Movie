import React from "react";
import logo from "./yoon_logo.png";
import "./App.css";
import Popular from "./components/Popular";
import TopRank from "./components/TopRank";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="윤플릭스 로고" />
      <a href="https://www.youtube.com/watch?v=ig7ha2zpLZI">
        <div className="App-main"></div>
      </a>

      <div className="App-content">
        <div className="Content-title" aria-label="윤플릭스 인기 콘텐츠">
          Yoonflix 인기 콘텐츠
        </div>
        <Popular />
      </div>
      <div className="App-content">
        <div className="Content-title" aria-label="지금 뜨는 콘텐츠">
          지금 뜨는 콘텐츠
        </div>
        <TopRank />
      </div>
      <Footer />
    </div>
  );
}

export default App;
