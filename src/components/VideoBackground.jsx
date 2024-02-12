import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ videoID }) => {
  // const [trailerID, setTrailerID] = useState(null)
  useMovieTrailer(videoID)
  const trailerVideo = useSelector(store=>store.movies?.trailerVideo)
  
  return (
    <div className="absolute w-full">
      <iframe
        className="w-full h-full aspect-video"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?si=_LAJmn54HtM90fC7?&autoplay=1&mute=1&loop=1&playlist=${trailerVideo?.key}&controls=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
