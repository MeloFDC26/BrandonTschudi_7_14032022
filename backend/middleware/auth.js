const jwt = require("jsonwebtoken");

//Middleware qui vérifie le token reçu
module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, `${process.env.TOKEN_SECRET}`);
    const userId = decodedToken.userId;
  } catch (error) {
    res.status(401).json({ error: error | "Requête non authentifiée !" });
  }
};
