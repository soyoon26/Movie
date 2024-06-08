import React from "react";
import MovieList from "./MovieList";
import first from "../assets/topFive/더에이트쇼.webp";
import second from "../assets/topFive/귀멸의 칼날.webp";
import third from "../assets/topFive/히어로는아닙니다만.webp";
import fourth from "../assets/topFive/돌싱걸즈5.jpg";
import fifth from "../assets/topFive/브리저튼3.webp";
function TopRank() {
  const movies = [
    {
      title: "더 이에트쇼",
      posterUrl: first,
      youtube: "https://www.youtube.com/watch?v=CWfWMxDqbN0",
    },
    {
      title: "귀멸의 칼날",
      posterUrl: second,
      youtube: "https://www.youtube.com/watch?v=RJayggM6ZKU",
    },
    {
      title: "히어로는 아닙니다만",
      posterUrl: third,
      youtube: "https://www.youtube.com/watch?v=wo2JKDWp3lM",
    },
    {
      title: "돌싱걸즈5",
      posterUrl: fourth,
      youtube: "https://www.youtube.com/watch?v=7W9jtL68WSg",
    },
    {
      title: "브리저튼3",
      posterUrl: fifth,
      youtube: "https://www.youtube.com/watch?v=VpSEqIdmlnM",
    },
  ];

  return (
    <div>
      <MovieList movies={movies} />
    </div>
  );
}
export default TopRank;
