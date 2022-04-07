const Post = require("../models/Post");
const User = require("../models/User");

//Fonction permettant de créer un post
exports.createPost = async (req, res) => {
  try {
    const newPost = new Post(req.body);
    console.log(req.body);
    await newPost.save();
    res.status(201).json({ newPost });
  } catch (error) {
    res.status(500).json({ error });
  }
};

//Fonction permettant de supprimer un post
exports.deletePost = async (req, res) => {
  try {
    await Post.destroy({
      where: {
        id: req.params.id
      }
    })
    res.status(200).json({ message: 'Post supprimé !' });
  } catch (error) {
    res.status(500).json({ error });
  }
};

//Fonction permettant de modifier un post
exports.updatePost = async (req, res) => {
  try {
   const post =  await Post.findOne({
      where: {
        id: req.params.id
      }
    });
    if (post) {
      post.title = req.body.title;
      post.description = req.body.description;
      await post.save();
      return res.status(200).json({ post });
    }
    return res.status(404).json({error: "Post non trouvé !"})
  } catch (error) {
    res.status(500).json({ error });
  }
};

//Fonction permettant de récupérer tous les posts
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.findAll({ include: User });
    res.status(200).json({ posts });
  } catch (error) {
    res.status(500).json({ error });
  }
};

//Fonction permettant de récupérer un post
exports.getOnePost = async (req, res) => {
  try {
    const post = await Post.findOne({
      include: User,
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ post });
  } catch (error) {
    res.status(500).json({ error });
  }
};
