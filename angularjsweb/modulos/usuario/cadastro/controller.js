 angular.module('blogjs.usuario').controller('CadastroUsuarioController', function($scope, $location, usuarios){
    $scope.usuario = {};

    $scope.cadastrar = function(usuario){
      usuarios.cadastrar(usuario);
      if (valido(usuario)) {
        var promise = usuarios.cadastrar(usuario);

        promise.then(function(resultado){
          $location.path('login');
        });

        promise.then(function(err){
          alert('Não foi possível registrar!');
        });

      }else {
        alert('Dados inválidos');
      }
    };

    var valido = function(usuario){
      return usuario.nome && usuario.senha && usuario.login
    };
 });
