const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/users');
const auth = require('../middleware/auth');
const isOwnerOrAdmin = require('../middleware/isOwnerOrAdmin');

router.delete('/:id', auth, isOwnerOrAdmin, usersCtrl.deleteUser);
router.put('/:id', auth, isOwnerOrAdmin, usersCtrl.updateUser);
router.get('/:id', auth, usersCtrl.getOneUser);

module.exports = router;