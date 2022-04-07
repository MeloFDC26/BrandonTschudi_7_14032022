const express = require('express');
const router = express.Router();
const authCtrl = require('../controllers/auth');

//Déclaration des routes pour auth, ici signup et login
router.post('/signup', authCtrl.signup);
router.post('/login', authCtrl.login);


module.exports = router;