const express = require('express');
const router = express.Router();
const postsCtrl = require('../controllers/posts');

router.post('/', postsCtrl.createPost);
router.delete('/:id', postsCtrl.deletePost);
router.put('/:id', postsCtrl.updatePost);
router.get('/', postsCtrl.getAllPosts);
router.get('/:id', postsCtrl.getOnePost);

module.exports = router;