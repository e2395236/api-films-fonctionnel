const http = require("http");
const express = require("express");
const path = require("path");
const mustacheExpress = require("mustache-express");
const cors = require("cors");
// ===== INITIALISATION VARIABLES D'ENVIRONNEMENT
require("dotenv").config();

// ===== INITIALISATION DU SERVEUR
const app = express();
const port = process.env.PORT || 3301;  

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ===== MOTEUR DE GABARIT
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "mustache");
app.engine("mustache", mustacheExpress());

// ===== MIDDLEWARES
app.use(express.static(path.join(__dirname, "public")));

// ===== ROUTES
app.use("/films", require("./routes/films.js"));
app.use("/utilisateurs", require("./routes/utilisateurs.js"));

// ===== PAGE 404
app.use((req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.statusCode = 404;
    res.render("404", { url: req.url });
});

// ===== DÉMARRAGE DU SERVEUR
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
