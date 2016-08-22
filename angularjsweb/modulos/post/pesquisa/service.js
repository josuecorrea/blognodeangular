angular.module('blogjs.post').factory('posts', function($http){

  var registrar = function(post){
    return $http.post('http://localhost:9000/v1/usuarios/'+usuarioId+'/posts',post);
  };

  var listarPorUsuario = function(){
    return $http.get('http://localhost:9000/v1/usuarios/'+usuarioId+'/posts');
  }

  var buscarPorUsuario = function(usuarioId, postId){
    return $http.get('http://localhost:9000/v1/usuarios/'+usuarioId+'/posts/'+postId);
  }

  var buscarPorId = function(postId){
    return $http.get('http://localhost:9000/v1/posts/'+postId);
  }

  var listarTodos = function(titulo, pagina){
    var pagina = pagina || 1;
    var url = '';
    if (titulo) {
       url = 'http://localhost:9000/v1/posts?pagina='+pagina+'&titulo='+titulo
    }else{
      url = 'http://localhost:9000/v1/posts?pagina='+pagina
    }
    return $http.get(url);
  }


  var setId = function(novoId){
    localStorage.setItem('currentPostId', novoId);
  }

  var getId = function(){
     var dados = localStorage.getItem('currentPostId');
     if (dados) {
       return parseInt(dados);
     }else{
       return 0;
     }
  }

  var getPosts = function(){
      var dados = localStorage.getItem('posts');
      if (dados) {
        return JSON.parse(dados);
      }else{
        return [];
      }
  }

  var setPosts = function(posts){
     localStorage.setItem('posts', JSON.stringify(posts));
  }
  return {
     registrar:registrar,
     listarPorUsuario:listarPorUsuario,
     buscarPorUsuario:buscarPorUsuario,
     listarTodos:listarTodos,
     buscarPorId:buscarPorId
  }
});
