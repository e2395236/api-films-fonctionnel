const express = require("express");
const router = express.Router();
const db = require("../config/db.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");

// Route pour lister tous les utilisateurs
router.get('/', async (req, res) => {
    try {
        const docRef = await db.collection("utilisateurs").get();
        const utilisateurs = docRef.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        res.json(utilisateurs);
    } catch (err) {
        console.error(err);
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
        }),
    ],
    async (req, res) => {
        console.log(req.body);
        try {
            const { mdp, courriel } = req.body;

            // Vérifie si le courriel est déjà utilisé
            const docRef = await db.collection("utilisateurs").where("courriel", "==", courriel).get();
            if (!docRef.empty) {
                return res.status(400).json({ message: "Courriel déjà utilisé" });
            }

            // Hashage du mot de passe
            const hash = await bcrypt.hash(mdp, 10);

            // Création de l'utilisateur avec le mot de passe hashé
            const user = { courriel, mdp: hash };
            const doc = await db.collection("utilisateurs").add(user);

            // Génération du token
            const token = jwt.sign({ id: doc.id }, process.env.JWT_SECRET, { expiresIn: "1d" });

            // Réponse avec le token
            res.json({ token });
        } catch (err) {
            console.error(err);
            res.status(500).send("Une erreur s'est produite lors de l'inscription.");
        }
    }
);

// Route pour la connexion d'un utilisateur
router.post("/connexion", async (req, res) => {
    const { courriel, mdp } = req.body;
    try {
        // Validation des données avec express-validator
        const validation = validationResult(req);
        if (!validation.isEmpty()) {
            return res.status(400).json({ errors: validation.array() });
        }

        // Vérification si le courriel existe dans la base de données
        const docRef = await db.collection("utilisateurs").where("courriel", "==", courriel).get();
        if (docRef.empty) {
            return res.status(400).json({ message: "Le courriel n'existe pas" });
        }

        // Récupération des données de l'utilisateur trouvé
        const utilisateur = docRef.docs[0].data();

        // Vérification du mot de passe
        const resultatConnexion = await bcrypt.compare(mdp, utilisateur.mdp);
        if (resultatConnexion) {
            // Génération du token JWT
            const token = jwt.sign({ id: utilisateur.id }, process.env.JWT_SECRET, { expiresIn: "1d" });
            res.json({ token });
        } else {
            res.status(400).json({ message: "Mot de passe incorrect" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send("Erreur lors de la connexion.");
    }
});

module.exports = router;
