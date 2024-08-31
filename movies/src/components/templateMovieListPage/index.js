import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import MovieList from "../movieList";
import Grid from "@mui/material/Grid";

function MovieListPageTemplate({ movies, title, action }) {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState("ratingDesc");
  const [minRating, setMinRating] = useState(0);
  const [maxRating, setMaxRating] = useState(10);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const moviesPerPage = 5;
  const genreId = Number(genreFilter);

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else if (type === "genre") setGenreFilter(value);
    else if (type === "sort") setSortOrder(value);
    else if (type === "minRating") setMinRating(value);
    else if (type === "maxRating") setMaxRating(value);
    else if (type === "startDate") setStartDate(value);
    else if (type === "endDate") setEndDate(value);
  };

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;

  let filteredMovies = movies
    .filter((m) => m.title.toLowerCase().includes(nameFilter.toLowerCase()))
    .filter((m) => (genreId > 0 ? m.genre_ids.includes(genreId) : true))
    .filter((m) => m.vote_average >= minRating && m.vote_average <= maxRating)
    .filter((m) => {
      const releaseDate = new Date(m.release_date);
      return (
        (!startDate || releaseDate >= new Date(startDate)) &&
        (!endDate || releaseDate <= new Date(endDate))
      );
    });

  switch (sortOrder) {
    case "ratingDesc":
      filteredMovies.sort((a, b) => b.vote_average - a.vote_average);
      break;
    case "alphabetical":
      filteredMovies.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case "newest":
      filteredMovies.sort(
        (a, b) => new Date(b.release_date) - new Date(a.release_date)
      );
      break;
    default:
      break;
  }

  const displayedMovies = filteredMovies.slice(
    indexOfFirstMovie,
    indexOfLastMovie
  );
  const totalPages = Math.ceil(filteredMovies.length / moviesPerPage);

  const handlePageClick = (pageNum) => {
    setCurrentPage(pageNum);
  };

  const paginationStyle = {
    textAlign: "center",
    marginTop: "20px",
  };

  const buttonStyle = {
    backgroundColor: "#f8f9fa",
    border: "1px solid #dee2e6",
    color: "#212529",
    padding: "5px 10px",
    margin: "0 5px",
    cursor: "pointer",
    borderRadius: "3px",
  };

  const activeButtonStyle = {
    backgroundColor: "#007bff",
    color: "white",
  };

  return (
    <>
      <Header title={title} />
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <FilterCard
            titleFilter={nameFilter}
            genreFilter={genreFilter}
            onUserInput={handleChange}
            onMinRatingChange={(event, value) =>
              handleChange("minRating", value)
            }
            onMaxRatingChange={(event, value) =>
              handleChange("maxRating", value)
            }
            onStartDateChange={(date) => handleChange("startDate", date)}
            onEndDateChange={(date) => handleChange("endDate", date)}
            onSortChange={(value) => handleChange("sort", value)}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <MovieList action={action} movies={displayedMovies} />
        </Grid>
      </Grid>
      <div style={paginationStyle}>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => handlePageClick(i + 1)}
            style={{
              ...buttonStyle,
              ...(i + 1 === currentPage && activeButtonStyle),
            }}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </>
  );
}

export default MovieListPageTemplate;
