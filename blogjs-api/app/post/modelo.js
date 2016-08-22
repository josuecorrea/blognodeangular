/**
 * Created by dev on 20/07/2016.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongoosePaginate = require('mongoose-paginate');

var comentarioSchema = new Schema({
    usuario:{
        type:String,
        required: true
    },
    conteudo:{
        type:String,
        required:true
    },
    dataComentario:{
        type:Date,
        default: Date.now
    }
});

var postSchema = new Schema({
    titulo:{
        type:String,
        required: true
    },
    conteudo:{
        type:String,
        required: true
    },
    tags:[String],
    dataPostagem:{
        type:Date,
        default: Date.now
    },
    dono:{
        type:String,
        required: true
    },
    comentario:[comentarioSchema]

});

postSchema.plugin(mongoosePaginate);
var Post = mongoose.model('posts', postSchema);
module.exports = Post;

