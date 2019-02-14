import Validator from 'validator';
import isEmpty from './isEmpty';

function validateRegisterInput(data){
    let errors={}
    data.username=!isEmpty(data.username) ? data.username: ''
    data.email=!isEmpty(data.email) ? data.email:''
    data.password=!isEmpty(data.password) ? data.email:''

    if(!Validator.isLength(data.name,{min:2,max:30})){
        errors.name='Nombre debe tener entre 2 y 30 letras'
    }

    if(Validator.isEmpty(data.username)){
        errors.name='El nombre es requerido '
    }

    if(!Validator.isEmail(data.email)){
        errors.email='El email es invalido '
    }

    if(Validator.isEmpty(data.email)){
        errors.email='El email es requerido '
    }

    if(!Validator.isLength(data.password,{min:6,max:30})){
        errors.password='La contraseña debe tener minimo 6 caracteres '
    }

    if(Validator.isEmpty(data.password)){
        errors.password='La contaseña es requerida '
    }

    return {
        errors,
        isValid:isEmpty(errors)
    }
}

export default validateRegisterInput;