import React from "react";

const getImageSource = (poster_path, configApi) => {
  const { images: { secure_base_url } = {} } = configApi;
  return `${secure_base_url}w500/${poster_path}`;
};

const MovieSlider = ({ movies, configApi }) => {
  return (
    <section className="slider">
      {movies.map((movie) => {
        return (
          <div key={movie.id}>
            <img
              src={getImageSource(movie.poster_path, configApi)}
              alt={movie.original_title.toLowerCase().replace("", "-")}
            />
          </div>
        );
      })}
    </section>
  );
};

export default MovieSlider;
