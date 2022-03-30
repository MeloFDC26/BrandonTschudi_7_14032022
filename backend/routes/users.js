const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/users');
const auth = require('../middleware/auth');

router.delete('/:id', auth, usersCtrl.deleteUser);
router.put('/:id', auth, usersCtrl.updateUser);


module.exports = router;