/**
 * Created by dev on 21/07/2016.
 */
var Post = require('./modelo');

var listarTodos = function (pagina, maximoItens, quandoListar, quandoDerErro) {
    Post.paginate({},{page: pagina, limit:maximoItens}, function (err, posts) {
            if(err){
                quandoDerErro(err);
            }else
            {
                quandoListar(posts);
            }
        });
}

var listarPorUsuario = function (pagina, maximoItens, usuarioId, quandoListar, quandoDerErro) {
    Post.paginate({dono:usuarioId},{page: pagina, limit:maximoItens}, function (err, posts) {
            if(err){
                quandoDerErro(err);
            }else {
                quandoListar(posts);
            }
        });
}

var cadastrar = function (post, quandoSalvar, quandoDerErro) {
    new Post(post).save(function (err,resultado) {
        if(err){
            quandoDerErro(err);
        }else{
            quandoSalvar(resultado);
        }
    });
}

var buscarPorDonoEId = function (id, dono, quandorEncontrar, quandoDerErro) {
    Post.findOne({_id:id, dono:dono})
        .exec(function(err, posts){
            if(err){
                quandoDerErro(err);
            }else{
                quandorEncontrar(posts);
            }
        });
}

var buscarPorId = function (id, quandorEncontrar, quandoDerErro) {
    Post.findById(id)
        .exec(function(err, posts){
            if(err){
                quandoDerErro(err);
            }else{
                quandorEncontrar(posts);
            }
        });
}

var buscarPorTitulo = function (pagina, maximoItens, titulo, quandoListar, quandoDerErro) {
    Post.paginate({titulo:new RegExp(titulo, "i")},{page: pagina, limit:maximoItens}, function (err, posts) {
            if(err){
                quandoDerErro(err);
            }else {
                quandoListar(posts);
            }
        });
}

exports.buscarPorTitulo = buscarPorTitulo;
exports.buscarPorDonoEId = buscarPorDonoEId;
exports.listarPorUsuario = listarPorUsuario;
exports.cadastrar = cadastrar;
exports.listarTodos = listarTodos;
exports.buscarPorId = buscarPorId;