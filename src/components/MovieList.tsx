import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Movie from "./Movie";

interface MovieListProps {
  movies: {
    title: string;
    posterUrl: string;
    youtube: string;
  }[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // 모바일 기준 크기
        settings: {
          slidesToShow: 3, // 모바일에서는 3개의 슬라이드 표시
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {movies.map((movie, index) => (
        <Movie
          key={index}
          title={movie.title}
          posterUrl={movie.posterUrl}
          youtube={movie.youtube}
        />
      ))}
    </Slider>
  );
};

export default MovieList;
