/**
 * Created by dev on 21/07/2016.
 */
var posts = require('./postService');

var listarPorUsuario = function (req, res) {
    var usuarioId = req.params.usuarioId;
    posts.listar(usuarioId, function (resultado) {
        res.status(200).json(resultado);
    }, function (erro) {
        res.status(400).json(erro);
    });
}

var cadastrar =  function (req, res) {
    var post = req.body;
    post.dono = req.params.usuarioId;
    posts.cadastrar(post, function (resultado) {
        res.status(201).json(resultado);
    },function (erro) {
        res.status(400).json(erro);
    });
}

var buscarPorDonoEId = function (req, res) {
    var postId = req.params.postId;
    var usuarioId = req.params.usuarioId;
    posts.buscarPorDonoEId(postId, usuarioId, function (resultado) {
        res.status(200).json(resultado);
    }, function (erro) {
        res.status(400).json(erro);
    });
}

var listarTodos = function (req, res) {
    var titulo = req.query.titulo;
    var pagina = req.query.pagina || 1;
    var maximoItens = req.query.maximoItens || 5;
    if(titulo){
        posts.buscarPorTitulo(pagina, maximoItens, titulo, function (resultado) {
            res.status(200).json(resultado);
        },function (erro) {
            res.status(400).json(erro);
        });
    }else{
        posts.listarTodos(pagina, maximoItens, function (resultado) {
            res.status(200).json(resultado);
        },function (erro) {
            res.status(400).json(erro);
        });
    }
}

var buscarPorId = function (req, res) {
    var postId = req.params.postId;

    posts.buscarPorId(postId, function (resultado) {
        res.status(200).json(resultado);
    }, function (erro) {
        res.status(400).json(erro);
    });
}



exports.listarTodos = listarTodos;
exports.listarPorUsuario = listarPorUsuario;
exports.cadastrar = cadastrar;
exports.buscarPorDonoEId = buscarPorDonoEId;
exports.buscarPorId = buscarPorId;