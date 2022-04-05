const User = require("../models/User");

exports.deleteUser = async (req, res) => {
  try {
    const userObject = req.body;
    User.findOne({
      where: {
        id: req.params.id,
      },
    }).then((User) => {
      User.destroy(userObject);
    });
    res.status(200).json({ userObject });
  } catch (error) {
    res.status(200).json({ message: "Utilisateur supprimé !" });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const userObject = req.body;
    User.findOne({
      where: {
        id: req.params.id,
      },
    }).then((User) => {
      User.update(userObject);
    });
    res.status(200).json({ userObject });
  } catch (error) {
    res.status(200).json({ message: "Utilisateur modifié !" });
  }
};
