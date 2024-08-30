import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// Connect to database
mongoose.connect(process.env.MONGO_DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (err) => {
  console.error(`Database connection error: ${err}`);
});
db.on("disconnected", () => {
  console.log("Database disconnected");
});
db.once("open", () => {
  console.log(`Database connected to ${db.name} on ${db.host}`);
});

export default db;
