const express = require("express");
const axios = require("axios");
const path = require("path");
const cors = require("cors");
require("dotenv/config");

axios.defaults.headers.common["Client-ID"] = process.env.CLIENT_ID;
axios.defaults.headers.common["Authorization"] = process.env.ACCESS_TOKEN;
axios.defaults.headers.common["Accept"] = "application/json";

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// API ROUTES
app.post("/api/games", (req, res) => {
  const { url, body } = req.body;

  console.log("Hit API: ", url, body);

  axios
    .post(url, body)
    .then(({ data }) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(PORT, () => {
  console.log("Server now listening on port 5000");
});
