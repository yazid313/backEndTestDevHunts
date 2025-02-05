import bodyParser from "body-parser";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import routes from "./src/routes/index.js";

const app = express();
const port = 3000;

app.use(express.static("images"));

// Parse aplikasi JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(cors());

// Panggil routes
// Panggil routes
routes(app);

//apapun yg dimasukan jika salah tampilkan:
app.use((req, res) => {
  res.status(404);
  res.send("<h1>404</h1>");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
