const express =require('express');
const mongoose = require('mongoose');
const mainRoute = require('./routes/routes')



mongoose.connect('mongodb+srv://alerwann:Mg456453@quetes.hsnyy.mongodb.net/quete?retryWrites=true&w=majority&appName=Quetes')
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(err => console.error('Connexion à MongoDB échouée !',err));

const app=express();

// protection contre les erreurs de cors
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

// force json

app.use(express.json())

app.use('/',mainRoute)

module.exports=app