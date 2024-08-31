import React from "react";
import { useParams } from "react-router-dom";
import PageTemplate from "../components/templateMoviePage";
import { getMovieVideos } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import MovieVideo from "../components/movieVideo";

const MovieVideosPage = (props) => {
  const { id } = useParams();
  const {
    data: movie,
    error,
    isLoading,
    isError,
  } = useQuery(["movie", { id: id }], getMovieVideos);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {movie ? (
        <>
          <PageTemplate movie={movie}>
            <MovieVideo movie={movie} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie videos</p>
      )}
    </>
  );
};

export default MovieVideosPage;
