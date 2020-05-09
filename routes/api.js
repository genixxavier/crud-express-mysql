var express = require('express');
var router = express.Router();
var {Usuario} = require('../models/');

router.get('/', async function(req, res, next) {
  const users = await Usuario.findAll().then(data => {
    res.status(200).send(data)
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving tutorials."
    });
  });
});
router.get('/:id', async function(req, res, next) {
  let idUser = req.params.id
  const users = await Usuario.findOne({
      where: {
          id: idUser,
      }
  });
  if(!users) return res.status(404).send('0')
  res.status(200).send(users)
});

router.post('/create', async function(req, res, next) {
 
  const usuario = {
    nombre: req.body.nombre,
    apellidos: req.body.apellidos,
    sexo: req.body.sexo,
    celular: req.body.celular,
    sueldo: req.body.sueldo,
    afp: req.body.afp,
    onp: req.body.onp
  };

  Usuario.create(usuario)
    .then(data => {
      res.send('1');
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });

});

router.put('/id/:id', async function(req, res, next) {
    let idUser = req.params.id

    const user = await Usuario.update({
        nombre: req.body.nombre,
        apellidos: req.body.apellidos,
        sexo: req.body.sexo,
        celular: req.body.celular,
        sueldo: req.body.sueldo,
        afp: req.body.afp,
        onp: req.body.onp
    },
    {
        where: {
            id: idUser
        }
    })

    if(!user){
        return res.status(404).send('0')
    }
    
    res.status(200).send('1')
  
});

router.delete('/id/:id', async function(req, res, next) {
    let idUser = req.params.id

    const user = await Usuario.destroy({
        where: {
          id: idUser
        }
    });

    if(!user){
        return res.status(404).send('0')
    }
    
    res.status(200).send('1')
  
});

module.exports = router;
