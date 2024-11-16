// Imports
import express from "express";
import cors from "cors";
import mainRouter from "./routes/routes.js";
import dotenv from "dotenv";
import connectDb from "./ConnectDb/index.js";

// Middlewares
const app = express();
app.use(express.json());
app.use(cors());
dotenv.config({
  path: ".env",
});

// Routers
app.use("/api/v1", mainRouter);

// Requests
app.get("/", (req, res) => {
  res.json({
    message: "The fucking server is running",
  });
});

connectDb().then(() => {
  try {
    app.listen(3000, () => {
      console.log(`Server Running at the port 3000`);
    });
  } catch (error) {
    console.log(error);
  }
});
