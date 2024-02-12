import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div>
    <h1 className="text-xl font-bold my-2">{title}</h1>
      <div className="flex overflow-x-scroll p-2 no-scrollbar">
        <div className="flex gap-2 flex-shrink-0">
          {movies?.map((movie)=><MovieCard key={movie.id} movie={movie} posterPath={movie.poster_path}/>)}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
