var Usuario = require('./modelo');
var sha256 = require('sha256');

var cadastrar = function(usuario, quandoSalvar, quandoDerErro){
    usuario.senha = sha256(usuario.senha);
   new Usuario(usuario).save(function (err, resultados) {
      if(err){
        quandoDerErro(err);
      }else{
        quandoSalvar(resultados);
      }
   });
    console.log('Novo usuario adicionado: '+usuario);
}

var listar = function(quandoListar, quandoDerErro)
{
    Usuario.find()
        .select({nome:true, login:true})
        .exec(function (err, usuarios) {
            if(err){
              quandoDerErro(err);
            }else{
              quandoListar(usuarios);
            }
        });
}

var autenticar = function(login, senha, quandoEncontrar, quandoDerErro){
    Usuario.findOne({login:login, senha:sha256(senha)})
        .select({nome:true, login:true})
        .exec(function (err, usuario) {
            if(err){
                quandoDerErro(err);
            }else if(usuario){
                quandoEncontrar(usuario);
            }else{
                quandoDerErro(new Error('Usuário Inválido!'));
            }
        });
}

var buscar = function(id, quandoEncontrar, quandoDerErro){
    Usuario.findById(id)
        .select({nome:true, login:true})
        .exec(function (err, usuario) {
            if(err){
                quandoDerErro(err);
            }else if(usuario){
                quandoEncontrar(usuario);
            }else{
                quandoDerErro(new Error('Usuário Inválido!'));
            }
        });
}


exports.cadastrar = cadastrar;
exports.listar = listar;
exports.autenticar = autenticar;
exports.buscar = buscar;
