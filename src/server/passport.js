import {Strategy as JWTStrategy} from 'passport-jwt';
import {ExtractJWT} from 'passport-jwt'
import mongoose from 'mongoose';

const User= mongoose.model('Users')
const opts={}

opts.jwtFromRequest=ExtractJWT.fromAuthHeaderAsBearerToken()
opts.secretOrKey='secret'

export default (passport) =>{
    passport.use(new JWTStrategy(opts,function(jwt_payload,done){
        User.findById(jwt_payload,id)
            .then(user=>{
                if(user){
                    return done(null,user)
                }
                return done(null,false)
            })
            .catch(err=>console.error(err))
    }))
}

