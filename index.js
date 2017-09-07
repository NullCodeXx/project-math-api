//npm init
//Installer express.

const express = require('express');
let app = express();

//Crée un chemin et lui donner un parametre dans l'url comme : ?a=1&b=2 et il fera son calcule
app.get('/add', function(req, res) {
  let a = parseFloat(req.query.a); //transforme ce que je rentre en parametre en nombre.
  let b = parseFloat(req.query.b);
  let op = req.query.op; //opérateur

  let result;
  if (op === "-") {
    result = (a - b).toString();
  }else if (op === "p" ) {
    result = (a + b ).toString();
  }else if (op === "*" ) {
    result = (a * b ).toString();
  }else if (op === "%" ) {
    result = (a / b ).toString();
  }
  console.log(op);
  console.log("affiche l'operateur: " + op);
  res.send(result);
});

const port = 9191;
app.listen(port, function(err){
  if(err) {
    console.error('Erreur du demarrage server');
  }
  console.log("Ecoute sur le port: " + port);
});
