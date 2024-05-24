const mongoose=require('mongoose');
const Schema=mongoose.Schema

const postSchema=new Schema({
    // postID: {
    //     type:Number,
    //     unique:true,
    //     required:true
    // },
    // userID: {
    //     type: int,
    //     required: true
    // },
    title: {
        type: String,
        required: true
    }, 
    body: {
        type:String
    }
},{timestamps:true})

module.exports=mongoose.model('Post', postSchema)