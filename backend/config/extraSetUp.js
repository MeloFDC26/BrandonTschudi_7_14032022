//Paramètrage de extraSetUp qui permet de lier les tables User et Post
const User = require('../models/User');
const Post = require('../models/Post');

module.exports = () => {
    User.hasMany(Post);
    Post.belongsTo(User);
}