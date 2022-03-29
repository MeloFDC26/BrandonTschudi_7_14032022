const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/users');

router.delete('/:id', usersCtrl.deleteUser);
router.put('/:id', usersCtrl.updateUser);


module.exports = router;