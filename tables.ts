import { Boolean, DateTime, Int, Password, Table, Text } from "@inflector/db";

export const users = Table("users" , {
    username : Text() ,
    password : Password() ,
    isActive : Boolean() ,
    createdAt : DateTime() 
})

export const follows = Table("follows" , {
    id : Int() ,
    follower : Int().reference(() => [users.username]) ,
    following : Int().reference(() => [users.username]) ,
})

export const post = Table("post" ,{
    id : Int() ,
    content : Text() ,
    userId : Int().reference(() => [users.username]) ,
    createdAt : DateTime() 
})

export const Post_likes = Table("likes" , {
    id : Int() ,
    userId : Int().reference(() => [users.username]) ,
    postId : Int().reference(() => [post.id]) 
})


export const comments = Table("comments" , {
    id : Int() ,
    date : DateTime() ,
    text : Text() ,
    userId : Int().reference(() => [users.username]) ,
    postId : Int().reference(() => [post.id])
})

export const comment_likes = Table("comment_likes" , {
    id : Int() ,
    userId : Int().reference(() => [users.username]) ,
    commentId : Int().reference(() => [comments.id]) 
})




