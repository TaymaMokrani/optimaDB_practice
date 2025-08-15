import { Boolean, DateTime, Int, Password, Table, Text } from "@inflector/db";

export const users = Table("users" , {
    id : Int({autoIncrement : true, primaryKey : true}) ,
    username : Text({unique : true} ) ,
    password : Password({notNull : true}) ,
    isActive : Boolean() ,
    createdAt : DateTime({default : new Date().toString()})
})

export const follows = Table("follows" , {
    user : Int({primaryKey : true , unique : true }).reference(() => users.id) ,
    followers : Int().reference(() => [users.id]) ,
})

export const post = Table("post" ,{
    id : Int({autoIncrement : true, primaryKey : true}) ,
    content : Text() ,
    userId : Int().reference(() => [users.id]) ,
    createdAt : DateTime({default : new Date().toString()}) 
})

export const Post_likes = Table("likes" , {
    id : Int({autoIncrement : true}) ,
    userId : Int().reference(() => [users.id]) ,
    postId : Int().reference(() => [post.id]) 
})


export const comments = Table("comments" , {
    id : Int({autoIncrement : true , primaryKey : true}) ,
    date : DateTime({default : new Date().toString()}) ,
    text : Text() ,
    userId : Int().reference(() => [users.id]) ,
    postId : Int().reference(() => [post.id])
})

export const comment_likes = Table("comment_likes" , {
    id : Int({autoIncrement : true}) ,
    userId : Int().reference(() => [users.id]) ,
    commentId : Int().reference(() => [comments.id]) 
})


