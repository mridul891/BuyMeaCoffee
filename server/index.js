import express from "express";
import cors from "cors";
import mainRouter from "./routes/routes.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/v1" , mainRouter)

app.get("/", (req, res) => {
  res.json({
    message: "The fucking server is running",
  });
});

app.listen(3000, () => {
  console.log(`Server Running at the port 3000`);
});
