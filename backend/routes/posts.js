const express = require('express');
const router = express.Router();
const postsCtrl = require('../controllers/posts');
const auth = require('../middleware/auth');
const isOwnerOrAdmin = require('../middleware/isOwnerOrAdmin');

//Déclaration des routes pour posts, ici create, delete, update, getAll et getOne
router.post('/', auth, postsCtrl.createPost);
router.delete('/:id', auth, isOwnerOrAdmin, postsCtrl.deletePost);
router.put('/:id', auth, isOwnerOrAdmin, postsCtrl.updatePost);
router.get('/', auth, postsCtrl.getAllPosts);
router.get('/:id', auth, postsCtrl.getOnePost);

module.exports = router;