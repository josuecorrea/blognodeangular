var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');

mongoose.connect('localhost/blog');

var app = express();
app.use(bodyParser.json());
app.use(cors());

var usuarioController = require('./usuario/controller');
var postController = require('./post/controller');

app.get('/v1/usuarios/listar', usuarioController.listar);
app.post('/v1/usuarios/cadastrar', usuarioController.cadastrar);
app.post('/v1/usuarios/auth', usuarioController.autenticar);
app.post('/v1/usuarios/:id', usuarioController.buscar);


app.post('/v1/posts', postController.listarTodos);
app.post('/v1/posts/:postId', postController.buscarPorId);
app.post('/v1/usuarios/:usuarioId/posts', postController.listarPorUsuario);
app.post('/v1/usuarios/:usuarioId/posts', postController.cadastrar);
app.get('/v1/usuarios/:usuarioId/posts/:postId', postController.buscarPorDonoEId);

app.listen(9000, function(){
  console.log('App no ar');
})
