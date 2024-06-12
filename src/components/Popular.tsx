import React from "react";
import MovieList from "./MovieList";
import first from "../assets/popular/빌어먹을세상따위.webp";
import second from "../assets/popular/기묘한 이야기.webp";
import third from "../assets/popular/베이비레인디어.webp";
import fourth from "../assets/popular/나의 문어 선생님.png";
import fifth from "../assets/popular/DP.jpg";
import sixth from "../assets/popular/살인자난감.webp";
import seventh from "../assets/popular/굿걸스.jpg";
function Popular() {
  const moviesObj = [
    {
      title: "빌어먹을 세상 따위",
      posterUrl: first,
      youtube: "https://www.youtube.com/watch?v=FruHLslczag",
    },
    {
      title: "기묘한 이야기",
      posterUrl: second,
      youtube: "https://www.youtube.com/watch?v=AZR9143LSoo",
    },
    {
      title: "베이비 레인디어",
      posterUrl: third,
      youtube: "https://www.youtube.com/watch?v=eafm1gB6SCM",
    },
    {
      title: "나의 문어 선생님",
      posterUrl: fourth,
      youtube: "https://www.youtube.com/watch?v=3s0LTDhqe5A",
    },
    {
      title: "DP",
      posterUrl: fifth,
      youtube: "https://www.youtube.com/watch?v=tngyy2UcWuI",
    },
    {
      title: "살인자ㅇ난감",
      posterUrl: sixth,
      youtube: "https://www.youtube.com/watch?v=YiRAfZl7owU",
    },
    {
      title: "굿걸스",
      posterUrl: seventh,
      youtube: "https://www.youtube.com/watch?v=Q0Tfuwlg-Z0",
    },
  ];
  const movies = Array.from(Object.values(moviesObj));
  return (
    <div>
      <MovieList movies={movies} />
    </div>
  );
}
export default Popular;
