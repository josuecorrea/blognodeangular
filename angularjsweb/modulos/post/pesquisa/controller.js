angular.module('blogjs.post').controller('PostPesquisaController', function($scope, posts, $location, $routeParams, usuarios){

  var carregarPosts = function(){
    var promise = posts.listarPorUsuario($routeParams.id);
    promise.then(function(resultado){
        $scope.posts = restultado.data;
    });

    promise.catch(function(err){
        alert(err);
    });
  }

  var carregaUsuario = function(){
     var promise =  usuarios.buscarPorUsuario($routeParams.id);
      promise.then(function (resultado) {
          $scope.usuario = resultado.data;
      });
      promise.catch(function (err) {
          $location.path('/login');
      });
  }

  carregarPosts();
  carregaUsuario();
});
