import express from 'express';
import gravatar from 'gravatar';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import passport from 'passport';
import validateRegisterInput from '../validation/register';
import validateLoginInput from '../validation/login';
import User from '../lib/mongo';

const router=express.Router()

router.post('/register',function(req,res){

    const {errors,isValid}=validateRegisterInput(req.body)

    if(!isValid){
        return res.status(400).json(errors)
    }

    User.findOne({
        email:req.body.email
    }).then(user=>{
        if(user){
            return res.status(400).json({
                email:'Email already exists'
            })
        }else{
            const avatar=gravatar.url(req.body.email,{
                s:'200',
                r:'pg',
                d:'mm'
            })

            const newUser=new User({
                username:req.body.username,
                email:req.body.email,
                password:req.body.password,
                avatar
            })

            bcrypt.genSalt(10,(err,salt)=>{
                if(err) {console.error('There was an error',err)}
                else{
                    bcrypt.hash(newUser.password,salt,(err,hash)=>{
                        if(err){console.error('There was an error',err)}
                        else{
                            newUser.password=hash
                            newUser
                                .save()
                                .then(user=>{
                                    res.json(user)
                                })
                        }
                    })
                }
            })
        }
    })
})

router.post('/login',(req,res)=>{

    const {errors,isValid}=validateLoginInput(req.body)

    if(!isValid){
        return res.status(400).json(errors)
    }

    const email=req.body.email
    const password=req.body.password

    User.findOne({email})
        .then(user=>{
            if(!user){
                errors.email='User not found'
                return res.status(404).json(errors)
            }

            bcrypt.compare(password,user.password)
                .then(isMatch=>{
                    if(isMatch){
                        const payload={
                            id:user.id,
                            name:user.name,
                            avatar:user.avatar
                    }
                        jwt.sign(payload,'secret',{
                            expiresIn:3600
                        },(err,token)=>{
                            if(err) console.error('Hay un error con el token',err)
                            else{
                                res.json({
                                    success:true,
                                    token:`Bearer ${token}`
                            })
                        }
                    })
                }
                else {
                    errors.password='Password Incorrecto'
                    return res.status(400).json(errors)
                }
                })
        })
})

router.get('/me',passport.authenticate('jwt',{session:false}),(req,res)=>{
    return res.json({
        id:req.user.id,
        name:req.user.name,
        email:req.user.email
    })
})

export default router;