const express = require("express");

const app = express();

app.get("/", (request, response) => {
  return response.json({ message: "Hello Letícia" });
});

app.listen(3333, () => {
  console.log("🚀 back-end started");
});
