import mongoose from 'mongoose';
import {DB_NAME} from '../config/index';

const Schema=mongoose.Schema;


const UserSchema= new Schema({
    userId:{
        type:Number,
        required:true
    },
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
        default:Date.now
    },
    active:{
        type:Boolean,
        required:true
    }
})

export const User=mongoose.model('Users',UserSchema)

 

