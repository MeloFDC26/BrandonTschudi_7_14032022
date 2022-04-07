const User = require("../models/User");
const Post = require("../models/Post");

exports.deleteUser = async (req, res) => {
  try {
    await User.destroy({
      where: {
        id: req.params.id,
      },
    })
    res.status(200).json({ message: 'compte supprimé' });
  } catch (error) {
    res.status(500).json({ message: "Une erreur s'est produite" });
  }
};

exports.updateUser = async (req, res) => {
  try {
    await User.update({
      where: {
        id: req.params.id,
      },
    },
      { ...req.body })
    res.status(200).json({ message: 'Utilisateur mis à jour' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Une erreur s'est produite" });
  }
};

exports.getOneUser = async (req, res) => {
  try {
    const user = await User.findOne({
      include: Post,
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ error });
  }
};

