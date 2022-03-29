const User = require("../models/User")

exports.deleteUser = (req, res) => {
    const userObject = req.body;
    User.findOne({
        where: {
            id: req.params.id
        }
    })
    .then((User) => {
        User.destroy(userObject);
    });
    res.status(200).json({message: 'Utilisateur supprimé !'});
}