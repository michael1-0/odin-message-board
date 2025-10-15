import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";
import path from "path";
import { definitelyNotRouter } from "./routes/definitelyNotRouter.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const assetsPath = path.join(__dirname, "public");
const app = express();
const PORT = 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(assetsPath));
app.use("/", definitelyNotRouter);
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).send(err);
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Server running at http://localhost:${PORT}/`);
});
