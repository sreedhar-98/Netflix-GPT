import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { TMDB_APIOptions } from "../utils/constants";

const useMovieTrailer = (videoID) => {
  const dispatch = useDispatch();
  const trailer = useSelector(store=>store.movies.trailerVideo)
  useEffect(() => {
    !trailer && getVideos();
  }, []);
  const getVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/"+videoID+"/videos?language=en-US",
      TMDB_APIOptions
    );
    const json = await data.json();

    const filteredVideo = json.results?.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filteredVideo?.length ? filteredVideo[0] : json?.results[0];
    dispatch(addTrailerVideo(trailer));
  };
};

export default useMovieTrailer;
