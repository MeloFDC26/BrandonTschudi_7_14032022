const express = require('express');
const bodyParser = require ('body-parser');
//Configuration de dotenv
const dotenv = require('dotenv');
dotenv.config({path: 'config/.env'});
const {initDB} = require('./config/dbConfig');

const app = express();
const authRoutes = require('./routes/auth');
const usersRoutes = require('./routes/users');
const postsRoutes = require('./routes/posts');
const extraSetUp = require('./config/extraSetUp');

//Middleware pour permettre à tout le monde d'utiliser les routes ci-dessous
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

initDB();
extraSetUp();

//Ajout de la route utilisateur
app.use('/api/auth', authRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/posts', postsRoutes);


module.exports = app;