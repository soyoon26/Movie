import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Movie from "./Movie";

interface MovieListProps {
  movies: {
    title: string;
    posterUrl: string;
  }[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {movies.map((movie, index) => (
        <Movie key={index} title={movie.title} posterUrl={movie.posterUrl} />
      ))}
    </Slider>
  );
};

export default MovieList;
