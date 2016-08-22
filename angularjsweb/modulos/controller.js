angular.module('blogjs').controller('HomeController', function($scope,$location, usuarios){

  var carregarUsuario = function(){
      return usuarios.getUsuarioLogado();
  }

   $scope.usuarioLogado = carregarUsuario();

    $scope.sair = function(usuarioLogado){
       sair($scope.usuarioLogado);
    }

    var sair = function(usuario){
      $scope.usuarioLogado = null;
      $location.path('/');
    }

    //msg listners
    $scope.$on('usuario.entrou', function(evento, usuario){
      console.log('Recebendo evento: usuario entrou'+usuario);
      $scope.usuarioLogado = usuario;
      $location.path('usuarios/'+usuario._id+'/posts');
    });

    $scope.$on('usuario.sair', function(evento, usuario){
        console.log('Recebendo evento: usuario saiu'+usuario);
        sair(usuario);
    });
});
