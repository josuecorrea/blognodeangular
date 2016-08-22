angular.module('blogjs.post').controller('PostPesquisaGeralController', function($scope, posts, $location, $routeParams, usuarios){

  var carregarPosts = function(pagina){
    var promise = posts.listarTodos($scope.filtro);
    promise.then(function(resultado){
        $scope.totalPost = parseInt(restultado.data.docs.total);
        $scope.paginaAtual = parseInt(restultado.data.docs.page);
        $scope.totalPaginas = parseInt(restultado.data.docs.pages);
        $scope.posts = parseInt(restultado.data.docs);
    });

    promise.catch(function(err){
        alert(err);
    });
  }

  $scope.montarPaginas = function(paginas){
    return new Array(paginas);
  }

  $scope.atualizarPosts = function functionName() {
      carregarPosts();
  }

  $scope.carregarPagina = function(pagina) {
    if (pagina >= 1 && pagina<=$scope.totalPaginas) {
      carregarPosts(pagina);
    }
  }

  carregarPosts();

});
