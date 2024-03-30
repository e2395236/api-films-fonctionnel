const express = require("express");
const router = express.Router();
const db = require("../config/db.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const auth = require("../middlewares/auth.js");
const { check, validationResult } = require("express-validator");


// Route pour lister tous les utilisateurs
router.get('/', async (req, res) => {
    try {
        const docRef = await db.collection("utilisateurs").get();
        const utilisateurs = [];
        docRef.forEach(doc => {
            utilisateurs.push({ id: doc.id, ...doc.data() });
        });
        res.json(utilisateurs);
    } catch (err) {
        console.log(err);
        res.status(500).send("Erreur lors de la récupération des utilisateurs.");
    }
});



// Route pour l'inscription d'un nouvel utilisateur
router.post(
    "/inscription",
    [
        check("courriel").escape().trim().notEmpty().isEmail().normalizeEmail(),
        check("mdp").escape().trim().notEmpty().isLength({ min: 8, max: 20 }).isStrongPassword({
            minLength: 8,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1,
        }),
    ],
    async (req, res) => {
        console.log(req.body); 
        try {
            const validation = validationResult(req);
            if (!validation.isEmpty()) {
                return res.status(400).json({ message: "Données invalides" });
            }

            const { mdp, courriel } = req.body;
            const docRef = await db.collection("utilisateurs").where("courriel", "==", courriel).get();
            const utilisateurs = [];

            docRef.forEach((doc) => {
                utilisateurs.push({ id: doc.id, ...doc.data() });
            });

            if (utilisateurs.length > 0) {
                res.statusCode = 400;
                res.json({ message: "Courriel déjà utilisé" });
            } else {
                const hash = await bcrypt.hash(mdp, 10);
                const user = { courriel, mdp: hash };
                const doc = await db.collection("utilisateurs").add(user);
                const token = genererToken(doc.id);
                res.json({ token });
            }
        } catch (err) {
            console.log(err);
            res.status(500).send(err);
        }
    }
);

// Route pour la connexion d'un utilisateur
router.post(
    "/connexion",
    [
        check("mdp").escape().trim().notEmpty().isString(),
        check("courriel").escape().trim().notEmpty().isEmail().normalizeEmail(),
    ],
    async (req, res) => {
        try {
            const validation = validationResult(req);
            if (!validation.isEmpty()) {
                return res.status(400).json({ message: "Données invalides" });
            }

            const { mdp, courriel } = req.body;
            const docRef = await db.collection("utilisateurs").where("courriel", "==", courriel).get();
            if (docRef.empty) {
                return res.status(400).json({ message: "Le courriel n'existe pas" });
            }

            const utilisateur = docRef.docs[0].data();
            const resultatConnexion = await bcrypt.compare(mdp, utilisateur.mdp);

            if (resultatConnexion) {
                const token = genererToken(utilisateur.id);
                res.json({ token });
            } else {
                res.status(400).json({ message: "Mot de passe incorrect" });
            }
        } catch (err) {
            console.log(err);
            res.status(500).send("Une erreur s'est produite lors de la connexion.");
        }
    }
);

// Fonction pour générer un token JWT
const genererToken = function (id) {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

module.exports = router;

