import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";

const MovieVideo = ({ movie }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showNoVideos, setShowNoVideos] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (movie.results && movie.results.length === 0) {
        setShowNoVideos(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [movie.results]);

  return (
    <>
      <Typography variant="h5" component="h3">
        Videos
      </Typography>

      {movie.results && movie.results.length > 0 ? (
        movie.results.map((video) => (
          <div key={video.id}>
            <Typography>{video.name}</Typography>
            <iframe
              title={video.name}
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${video.key}`}
              allowFullScreen
            ></iframe>
          </div>
        ))
      ) : showNoVideos ? (
        <Typography>No videos available</Typography>
      ) : (
        <Typography>Loading videos...</Typography>
      )}

      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      ></Drawer>
    </>
  );
};

export default MovieVideo;
