const express = require("express");
const router = express.Router();
const db = require("../config/db.js");
const auth = require("../middlewares/auth.js");
const { check, validationResult } = require("express-validator");


/* Ajouter des films à partir de data/filmsDepart.js*/
const filmsDepart = require("../data/filmsDepart.js");
router.post("/ajouter-films", async (req, res) => {
    try {
        const films = filmsDepart;
        const filmsRef = await db.collection("Films").add(films);
        res.status(201).json({ id: filmsRef.id, ...films });
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
})



/**
 * Cette route permet de récupérer la liste des films
 * @route GET /films
 */
router.get(
    "/liste-films",
    [
        check("limit").escape().trim().optional(true).isInt(),
        check("orderDirection").escape().trim().isString().optional(true),
        check("orderBy").escape().trim().isString().optional(true),
    ],
    async (req, res) => {
        try {
            const validation = validationResult(req);
            if (!validation.isEmpty()) {
                return res.status(400).json({ message: "Données invalides" });
            }
            const { orderBy = "titre", orderDirection = "asc", limit = 100 } = req.query;
            const filmsRef = await db.collection("Films").orderBy(orderBy, orderDirection).limit(+limit).get();
            const films = [];

            filmsRef.forEach((doc) => {
                films.push({ id: doc.id, ...doc.data() });
            });

            res.status(200).json(films);
        } catch (e) {
            res.status(500).json({ message: e.message });
        }
    }
);

/**
 * Cette route permet de récupérer un film spécifique
 * @route GET /films/{id}
 */
router.get("/film/:id", [check("id").escape().trim().notEmpty()], async (req, res) => {
    try {
        const validation = validationResult(req);
        if (!validation.isEmpty()) {
            return res.status(400).json({ message: "Données invalides" });
        }

        const id = req.params.id;
        const filmRef = await db.collection("Films").doc(id).get();

        if (!filmRef.exists) {
            return res.status(404).json({ message: "Film non trouvé" });
        }

        res.status(200).json(filmRef.data());
    } catch (err) {
        res.status(500).send(err);
    }
});

/**
 * Cette route protégée permet de créer un film
 * @route POST /films
 */
router.post(
    "/ajouter-film",
    auth, 
    [
        check("titre").escape().trim().notEmpty().isString(),
        check("genres").escape().trim().exists().isArray(),
        check("description").escape().trim().notEmpty().isString(),
        check("annee").escape().trim().notEmpty().isString(),
        check("realisation").escape().trim().notEmpty().isString(),
        check("titreVignette").escape().trim().notEmpty().isString(),
      
        // Ajoutez d'autres champs de validation au besoin
    ],
    async (req, res) => {
        try {
            const validation = validationResult(req);
            if (!validation.isEmpty()) {
                return res.status(400).json({ message: "Données invalides" });
            }

            const film = req.body;
            const docRef = await db.collection("Films").add(film);

            res.status(201).json({ id: docRef.id, ...film });
        } catch (err) {
            console.log(err);
            res.status(500).send(err);
        }
    }
);

/**
 * Cette route protégée permet de modifier un film
 * @route PUT /films/{id}
 */
router.put(
    "/modifier-film/:id",
    auth, 
    [
        check("id").escape().trim().notEmpty().isString(),
        check("titre").escape().trim().notEmpty().isString(),
        check("genres").escape().trim().exists().isArray(),
        check("description").escape().trim().notEmpty().isString(),
        check("annee").escape().trim().notEmpty().isString(),
        check("realisation").escape().trim().notEmpty().isString(),
        check("titreVignette").escape().trim().notEmpty().isString(),

    
        // Ajoutez d'autres champs de validation au besoin  
      
    ],
    async (req, res) => {
        try {
            const validation = validationResult(req);
            if (!validation.isEmpty()) {
                return res.status(400).json({ message: "Données invalides" });
            }

            const id = req.params.id;
            const updates = req.body;

            await db.collection("Films").doc(id).update(updates);

            res.status(200).json({ id, ...updates });
        } catch (err) {
            console.log(err);
            res.status(500).send(err);
        }
    }
);

/**
 * Cette route protégée permet de supprimer un film
 * @route DELETE /films/{id}
 */
router.delete(
    "/supprimer-film/:id",
    auth, 
    [check("id").escape().trim().notEmpty().isString()],
    async (req, res) => {
        try {
            const validation = validationResult(req);
            if (!validation.isEmpty()) {
                return res.status(400).json({ message: "Données invalides" });
            }
            const id = req.params.id;

            await db.collection("Films").doc(id).delete();

            res.status(200).json({ message: `Film avec l'ID ${id} supprimé` });
        } catch (err) {
            console.log(err);
            res.status(500).send(err);
        }
    }
);

module.exports = router;
