// export const getMovies = () => {
//   return fetch(
//     `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
//   )
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(response.json().message);
//       }
//       return response.json();
//     })
//     .catch((error) => {
//       throw error;
//     });
// };

export const getMovies = async () => {
  const response = await fetch("http://localhost:8080/api/movies", {
    headers: {
      Authorization: window.localStorage.getItem("token"),
    },
  });
  return response.json();
};

export const getMovie = (args) => {
  // console.log(args)
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
};

// export const getMovie = async (id) => {
//   const response = await fetch(`http://localhost:8080/api/movie/${id}`, {
//     headers: {
//       Authorization: window.localStorage.getItem("token"),
//     },
//   });
//   return response.json();
// };

export const getGenres = async () => {
  return fetch(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
      process.env.REACT_APP_TMDB_KEY +
      "&language=en-US"
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
};

// export const getGenres = async () => {
//   const response = await fetch("http://localhost:8080/api/genres", {
//     headers: {
//       Authorization: window.localStorage.getItem("token"),
//     },
//   });

//   return response.json();
// };

export const getMovieImages = ({ queryKey }) => {
  const [, idPart] = queryKey;
  const { id } = idPart;
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
};

// export const getMovieImages = async ({ queryKey }) => {
//   const [, idPart] = queryKey;
//   const { id } = idPart;

//   const response = await fetch(
//     `http://localhost:8080/api/movies/${id}/images`,
//     {
//       headers: {
//         Authorization: window.localStorage.getItem("token"),
//       },
//     }
//   );

//   return response.json();
// };

export const getMovieVideos = ({ queryKey }) => {
  const [, idPart] = queryKey;
  const { id } = idPart;
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_TMDB_KEY}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
};

// export const getMovieVideos = async ({ queryKey }) => {
//   const [, idPart] = queryKey;
//   const { id } = idPart;

//   const response = await fetch(
//     `http://localhost:8080/api/movies/${id}/videos`,
//     {
//       headers: {
//         Authorization: window.localStorage.getItem("token"),
//       },
//     }
//   );

//   return response.json();
// };

export const getSimilarMovies = (id) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_TMDB_KEY}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
};

// export const getSimilarMovies = async (id) => {
//   const response = await fetch(
//     `http://localhost:8080/api/movies/${id}/similar`,
//     {
//       headers: {
//         Authorization: window.localStorage.getItem("token"),
//       },
//     }
//   );

//   return response.json();
// };

export const getMovieReviews = (id) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
  )
    .then((res) => res.json())
    .then((json) => {
      // console.log(json.results);
      return json.results;
    });
};

// export const getMovieReviews = async (id) => {
//   const response = await fetch(
//     `http://localhost:8080/api/movies/${id}/reviews`,
//     {
//       headers: {
//         Authorization: window.localStorage.getItem("token"),
//       },
//     }
//   );

//   const data = await response.json();
//   return data.results;
// };

export const getUpcomingMovies = () => {
  return fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
};

// export const getUpcomingMovies = async () => {
//   const response = await fetch("http://localhost:8080/api/movies/upcoming", {
//     headers: {
//       Authorization: window.localStorage.getItem("token"),
//     },
//   });

//   if (!response.ok) {
//     const error = await response.json();
//     throw new Error(error.message);
//   }

//   return response.json();
// };

export const getNowPlayingMovies = () => {
  return fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
};

// export const getNowPlayingMovies = async () => {
//   const response = await fetch("http://localhost:8080/api/movies/nowPlaying", {
//     headers: {
//       Authorization: `Bearer ${window.localStorage.getItem("token")}`,
//     },
//   });

//   if (!response.ok) {
//     const error = await response.json();
//     throw new Error(error.message);
//   }

//   return response.json();
// };

export const getPopularMovies = () => {
  return fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
};

// export const getPopularMovies = async () => {
//   const response = await fetch("http://localhost:8080/api/movies/popular", {
//     headers: {
//       Authorization: `Bearer ${window.localStorage.getItem("token")}`,
//     },
//   });

//   if (!response.ok) {
//     const error = await response.json();
//     throw new Error(error.message);
//   }

//   return response.json();
// };

export const getTopRatedMovies = () => {
  return fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
};

// export const getTopRatedMovies = async () => {
//   const response = await fetch("http://localhost:8080/api/movies/topRated", {
//     headers: {
//       Authorization: `Bearer ${window.localStorage.getItem("token")}`,
//     },
//   });

//   if (!response.ok) {
//     const error = await response.json();
//     throw new Error(error.message);
//   }

//   return response.json();
// };

export const login = async (username, password) => {
  const response = await fetch("http://localhost:8080/api/users", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "post",
    body: JSON.stringify({ username: username, password: password }),
  });
  return response.json();
};

export const signup = async (username, password) => {
  const response = await fetch(
    "http://localhost:8080/api/users?action=register",
    {
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      body: JSON.stringify({ username: username, password: password }),
    }
  );
  return response.json();
};
