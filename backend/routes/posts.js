const express = require('express');
const router = express.Router();
const postsCtrl = require('../controllers/posts');
const auth = require('../middleware/auth');

router.post('/', auth, postsCtrl.createPost);
router.delete('/:id', auth, postsCtrl.deletePost);
router.put('/:id', auth, postsCtrl.updatePost);
router.get('/', auth, postsCtrl.getAllPosts);
router.get('/:id', auth, postsCtrl.getOnePost);

module.exports = router;