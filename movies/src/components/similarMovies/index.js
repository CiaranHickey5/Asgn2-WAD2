import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieListPageTemplate from "../components/templateMovieListPage";
import { getSimilarMovies } from "../api/tmdb-api";
import Spinner from "../components/spinner";

const SimilarMoviesPage = () => {
  const { id } = useParams(); // movie ID from URL
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSimilarMovies = async () => {
      setLoading(true);
      try {
        const response = await getSimilarMovies(id);
        setMovies(response.results);
      } catch (error) {
        console.error("Failed to fetch similar movies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSimilarMovies();
  }, [id]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <MovieListPageTemplate
      title="Similar Movies"
      movies={movies}
      action={() => {}}
    />
  );
};

export default SimilarMoviesPage;
