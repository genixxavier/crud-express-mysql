var express = require('express');
var router = express.Router();
const axios = require('axios')
const API_URL = 'http://localhost:3000/api/users/'
/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
    var data = await axios.get(API_URL)
                        .then(response => {
                          return response.data
                        })
                        .catch(error => {
                          console.log(error)
                        })
    res.render('index', {listusuarios: data});
  } catch (error) {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving tutorials."
    });
  }
});

router.get('/user/:id', async function(req, res, next) {
  let idUser = req.params.id
  try {
    var data = await axios.get(`${API_URL}/${idUser}`)
                        .then(response => {
                          return response.data
                        })
                        .catch(error => {
                          return 0
                        })

    if(data == 0) return res.status(404).send("No se encontro Usuario")
    res.render('edit', {usuario: data});

  } catch (error) {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving tutorials."
    });
  }
});

router.get('/create', async function(req, res, next) {
  let data = {}
  res.render('edit', {create: true,usuario: data});
});


module.exports = router;
