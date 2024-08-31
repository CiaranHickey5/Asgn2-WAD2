import jwt from "jsonwebtoken";
import User from "../api/users/userModel";

const authenticate = async (request, response, next) => {
  try {
    // Debug: Print headers
    console.log("Authorization Header:", request.headers.authorization);

    const authHeader = request.headers.authorization;
    if (!authHeader) {
      console.error("No authorization header");
      throw new Error("No authorization header");
    }

    // Extract token
    const token = authHeader.split(" ")[1];
    if (!token) {
      console.error("Bearer token not found");
      throw new Error("Bearer token not found");
    }

    // Debug: Print token
    console.log("Extracted Token:", token);

    // Verify token
    const decoded = await jwt.verify(token, process.env.SECRET);
    console.log("Decoded Token:", decoded);

    // Fetch user
    const user = await User.findByUserName(decoded.username);
    if (!user) {
      console.error("User not found");
      throw new Error("User not found");
    }

    request.user = user; // Attach user to request
    next();
  } catch (err) {
    // Debug: Print error message
    console.error(`Verification Failed: ${err.message}`);
    next(new Error(`Verification Failed: ${err.message}`));
  }
};

export default authenticate;
