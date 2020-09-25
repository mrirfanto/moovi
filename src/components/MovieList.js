import React from "react";
// import moviedb from "../api/moviedb";

const getImageSource = (poster_path, configApi) => {
  const { images: { secure_base_url } = {} } = configApi;
  return `${secure_base_url}w500/${poster_path}`;
};
const MovieList = ({ movies, configApi }) => {
  const imagesCard = movies.map((movie) => {
    return (
      <div className="card">
        <img
          key={movie.id}
          src={getImageSource(movie.poster_path, configApi)}
          alt={movie.original_title.toLowerCase().replace("", "-")}
        />
        <h1>{movie.title}</h1>
      </div>
    );
  });
  return <div className="movie-list">{imagesCard}</div>;
};

export default MovieList;
