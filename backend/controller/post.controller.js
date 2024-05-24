const mongoose = require('mongoose')
const Post=require('../models/post.model')



//get all posts
const getPosts=async (req, res)=>{
    try{
        const post=await Post.find({}).sort({createdAt: -1})
        res.status(200).json(post)
    }
    catch(e){
        res.status(400).json({error:e.message})
    }
}

//get single post
const getPostByID=async (req, res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({error:"Post ID is invalid"});
    try{
        const post=await Post.findById(id)
        if(!post) return res.status(404).json({error:"Post not exists"}); //how to properly throw error here
        res.status(200).json(post);
    }
    catch(e){
        res.status(400).json({error:e.message})
    }
}

//create new post
const createPost=async (req, res)=>{
    const {title, body}=req.body
    try{
        const post=await Post.create({title,body})
        res.status(200).json(post)
    }
    catch(e){
        res.status(400).json({error:e.message})
    }
}

//delete post
const deletePost=async (req, res)=>{
    const {id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({error:"Post ID is invalid"});

    try{
        const post = await Post.findByIdAndDelete(id)
        if(!post) return res.status(404).json({error:"Post not exists"}); //how to properly throw error here 
        res.status(200).json(post); 
    }
    catch(e){
        res.status(400).json({error:e.message})
    }
}
//update post
const updatePost=async (req, res)=>{
    const {id}=req.params;
    const {title}=req.body; //title lang muna papalitan
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({error:"Post ID is invalid"});
    try{
        const post = await Post.findByIdAndUpdate(id, {title:title})
        if(!post) return res.status(404).json({error:"Post not exists"}); //how to properly throw error here 
        res.status(200).json(post); 
    }
    catch(e){
        res.status(400).json({error:e.message})
    }
}

module.exports={getPosts, getPostByID, createPost, updatePost, deletePost}