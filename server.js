const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/games", (_req, res) => {
  res.json([
    { id: "obby", title: "Classic Obby", players: 0, description: "Your first obstacle game." },
    { id: "build-chill", title: "Build & Chill", players: 0, description: "Build, hang out and explore." }
  ]);
});

app.listen(PORT, () => {
  console.log(`BrickHill V1 running on port ${PORT}`);
});