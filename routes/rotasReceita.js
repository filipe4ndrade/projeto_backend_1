var express = require('express');
var router = express.Router();
var controllerReceita = require('../controller/controllerReceita');

// Create
router.get('/cria', controllerReceita.cria_get);
router.post('/cria', controllerReceita.cria_post);

// Read (All)
router.get('/pesquisa', controllerReceita.pesquisa_get);
router.post('/pesquisa', controllerReceita.pesquisa_post);

// Read (Single)
router.get('/consulta/:id', controllerReceita.consulta);

// Update
router.get('/altera/:id', controllerReceita.altera_get);
router.post('/altera/:id', controllerReceita.altera_post);

// Delete
router.get('/exclui/:id', controllerReceita.exclui); 

module.exports = router;
