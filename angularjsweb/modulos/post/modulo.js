angular.module('blogjs.post',[]);

angular.module('blogjs.post').config(function($routeProvider){
  $routeProvider
    .when('/usuarios/:id/posts', {
      controller:'PostPesquisaController',
      templateUrl: 'modulos/post/pesquisa/view.html'
    })
    .when('/usuarios/:id/posts/novo',{
     controller: 'RegistroPostController',
     templateUrl: 'modulos/post/cadastro/view.html'
   })
   .when('/usuarios/:id/posts/:postId',{
      controller: 'VisualizacaoUsuarioPostController',
      templateUrl: 'modulos/post/visualizacao_usuario/view.html'
   })
   .when('/posts',{
     controller:'PostPesquisaGeralController',
     templateUrl:'modulos/post/pesquisaGeral/view.html'
   })
   .when('/posts/:postId',{
     controller:'VisualizacaoPostController',
     templateUrl:'modulos/post/visualizacao/view.html'
   })
   .otherwise({
     redirectTo:'/posts'
   });
});
