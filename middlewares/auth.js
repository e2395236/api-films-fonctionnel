const jwt = require("jsonwebtoken");
const db = require("../config/db.js");

const auth = async (req, res, next) => {
    try {
        if (req.headers.authorization && req.headers.authorization.startsWith("Bearer ")) {
            const token = req.headers.authorization.split(" ")[1];
            const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

            const docRef = await db.collection("utilisateurs").doc(decodedToken.id).get();

            if (!docRef.exists) {
                throw "Non autorisé";
            } else {
                req.user = docRef.data();
                next();
            }
        } else {
            throw "Non autorisé";
        }
    } catch (error) {
        res.statusCode = 401;
        res.json({ message: "Non autorisé" });
    }
};

module.exports = auth;
