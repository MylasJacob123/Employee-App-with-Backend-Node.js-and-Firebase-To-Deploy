const express = require("express");
const cors = require("cors");
const app = express();

const dbRoutes = require("./Routes/db");

const authRoutes = require("./Routes/auth");

app.use(cors());
app.use(express.json());

app.use("/api", dbRoutes); //Data

app.use("/auth", authRoutes); //Auth

app.listen(9000, () => {
  console.log("Server is running on http://localhost:9000");
});