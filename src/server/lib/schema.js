import mongoose from 'mongoose';

const Schema=mongoose.Schema;


const UserSchema= new Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    createdDate:{
        type:Date,
        default:Date.now()
    },
    active:{
        type:Boolean,
        default:true
    }
})

const User=mongoose.model('Users',UserSchema)

export default User;

 

