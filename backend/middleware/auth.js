const jwt = require("jsonwebtoken");
require("dotenv").config();

//Middleware qui vérifie le token reçu
module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, `${process.env.TOKEN_SECRET}`);
    next();
  } catch (error) {
    res.status(401).json({ error: error | "Requête non authentifiée !" });
  }
};
