angular.module('blogjs.post').controller('VisualizacaoPostController', function($scope, $routeParams, posts, usuarios){

    var carregarPost = function(){
      var postId = $routeParams.postId;
      var promise = posts.buscarPorId(postId);
      promise.then(function(resultado){
        $scope.post = resultado.data;
      });

      promise.catch(function(erro){
        alert(erro);
      });
    }

    var carregaUsuario = function(){
      return usuarios.buscar($routeParams.id);
    }

    carregarPost();
});
