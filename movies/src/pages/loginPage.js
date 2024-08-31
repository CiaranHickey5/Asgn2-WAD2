import React, { useContext, useState } from "react";
import { Navigate, useLocation, Link } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";

const LoginPage = () => {
  const context = useContext(AuthContext);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [redirectToHome, setRedirectToHome] = useState(false);

  const handleLogin = async () => {
    const success = await context.authenticate(userName, password);
    if (success) {
      setRedirectToHome(true);
    }
  };

  let location = useLocation();
  const { from } = location.state?.from
    ? { from: location.state.from.pathname }
    : { from: "/" };

  if (context.isAuthenticated || redirectToHome) {
    return <Navigate to={from} />;
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f2f5",
      }}
    >
      <Paper elevation={3} sx={{ padding: 4, width: "300px" }}>
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
        <Typography variant="body1" gutterBottom>
          You must log in to view the movies!
        </Typography>
        <TextField
          fullWidth
          id="username"
          label="Username"
          variant="outlined"
          margin="normal"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <TextField
          fullWidth
          id="password"
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          fullWidth
          variant="contained"
          color="primary"
          sx={{ marginTop: 2 }}
          onClick={handleLogin}
        >
          Log In
        </Button>
        <Typography variant="body2" sx={{ marginTop: 2 }}>
          Not Registered?{" "}
          <Link
            to="/signup"
            style={{ color: "#1976d2", textDecoration: "none" }}
          >
            Sign Up!
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default LoginPage;
