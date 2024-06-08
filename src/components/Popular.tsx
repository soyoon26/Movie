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
  const movies = [
    { title: "빌어먹을 세상 따위", posterUrl: first },
    { title: "기묘한 이야기", posterUrl: second },
    { title: "베이비 레인디어", posterUrl: third },
    { title: "나의 문어 선생님", posterUrl: fourth },
    { title: "DP", posterUrl: fifth },
    { title: "살인자ㅇ난감", posterUrl: sixth },
    { title: "굿걸스", posterUrl: seventh },
  ];
  return (
    <div>
      <MovieList movies={movies} />
    </div>
  );
}
export default Popular;
