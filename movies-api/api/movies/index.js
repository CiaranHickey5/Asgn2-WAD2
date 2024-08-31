import express from "express";
import asyncHandler from "express-async-handler";
import movieModel from "./movieModel";
import {
  getUpcomingMovies,
  getMovieGenres,
  getMovieImages,
  getMovieVideos,
  getSimilarMovies,
  getMovieReviews,
} from "../tmdb-api";

const router = express.Router();

// Get all movies
router.get(
  "/",
  asyncHandler(async (req, res) => {
    let { page = 1, limit = 10 } = req.query;
    [page, limit] = [+page, +limit];
    const [total_results, results] = await Promise.all([
      movieModel.estimatedDocumentCount(),
      movieModel
        .find()
        .limit(limit)
        .skip((page - 1) * limit),
    ]);
    const total_pages = Math.ceil(total_results / limit);
    res.status(200).json({ page, total_pages, total_results, results });
  })
);

// Get movie by ID
router.get(
  "/movie/:id",
  asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const movie = await movieModel.findByMovieDBId(id);
    if (movie) {
      res.status(200).json(movie);
    } else {
      res.status(404).json({
        message: "The movie you requested could not be found.",
        status_code: 404,
      });
    }
  })
);

// Get upcoming movies
router.get(
  "/api/upcoming",
  asyncHandler(async (req, res) => {
    const upcomingMovies = await getUpcomingMovies();
    res.status(200).json(upcomingMovies);
  })
);

// Get movie genres
router.get(
  "/genres",
  asyncHandler(async (req, res) => {
    const movieGenres = await getMovieGenres();
    res.status(200).json(movieGenres);
  })
);

// Get movie images
router.get(
  "/api/movie/:id/images",
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const images = await getMovieImages(id);
    res.status(200).json(images);
  })
);

// Get movie videos
router.get(
  "/api/movie/:id/videos",
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const videos = await getMovieVideos(id);
    res.status(200).json(videos);
  })
);

// Get similar movies
router.get(
  "/api/movie/:id/similar",
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const similarMovies = await getSimilarMovies(id);
    res.status(200).json(similarMovies);
  })
);

// Get movie reviews
router.get(
  "/api/movie/:id/reviews",
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const reviews = await getMovieReviews(id);
    res.status(200).json(reviews);
  })
);

// Get now playing movies
router.get(
  "/api/now_playing",
  asyncHandler(async (req, res) => {
    const nowPlayingMovies = await getNowPlayingMovies();
    res.status(200).json(nowPlayingMovies);
  })
);

// Get popular movies
router.get(
  "/api/popular",
  asyncHandler(async (req, res) => {
    const popularMovies = await getPopularMovies();
    res.status(200).json(popularMovies);
  })
);

// Get top rated movies
router.get(
  "/api/top_rated",
  asyncHandler(async (req, res) => {
    const topRatedMovies = await getTopRatedMovies();
    res.status(200).json(topRatedMovies);
  })
);

export default router;
