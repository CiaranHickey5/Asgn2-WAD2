import React, { useContext, useState } from "react";
import { Navigate, Link } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";

const SignUpPage = () => {
  const context = useContext(AuthContext);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [registered, setRegistered] = useState(false);

  const register = () => {
    let passwordRegEx =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    const validPassword = passwordRegEx.test(password);

    if (validPassword && password === passwordAgain) {
      context.register(userName, password);
      setRegistered(true);
    }
  };

  if (registered) {
    return <Navigate to="/login" />;
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
          Sign Up
        </Typography>
        <Typography variant="body1" gutterBottom>
          You must register a username and password to{" "}
          <Link
            to="/login"
            style={{ textDecoration: "none", color: "#3f51b5" }}
          >
            log in
          </Link>
          .
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
        <TextField
          fullWidth
          id="passwordAgain"
          label="Confirm Password"
          type="password"
          variant="outlined"
          margin="normal"
          value={passwordAgain}
          onChange={(e) => setPasswordAgain(e.target.value)}
        />
        <Button
          fullWidth
          variant="contained"
          color="primary"
          sx={{ marginTop: 2 }}
          onClick={register}
        >
          Register
        </Button>
      </Paper>
    </Box>
  );
};

export default SignUpPage;
