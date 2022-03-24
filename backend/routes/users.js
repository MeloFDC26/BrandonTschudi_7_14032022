const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/auth');

router.delete('/:id', usersCtrl.deleteUser);


module.exports = router;