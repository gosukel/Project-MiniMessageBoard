import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import indexRouter from "./routes/index.js";

// initialize __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// configure app settings
const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

// initialize routers
app.use("/", indexRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server Listening on PORT: ${PORT}`);
});
