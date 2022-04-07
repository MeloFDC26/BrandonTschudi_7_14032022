const Post = require("../models/Post");
const User = require("../models/User");

exports.createPost = async (req, res) => {
  try {
    const newPost = new Post(req.body);
    await newPost.save();
    res.status(201).json({ newPost });
  } catch (error) {
    res.status(500).json({ error });
  }
};

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

exports.updatePost = async (req, res) => {
  try {
    await Post.update({
      where: {
        id: req.params.id
      }
    },
      {
        ...req.body
      });
    res.status(200).json({ postObject });
  } catch (error) {
    res.status(500).json({ error });
  }
};

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.findAll({ include: User });
    res.status(200).json({ posts });
  } catch (error) {
    res.status(500).json({ error });
  }
};

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
