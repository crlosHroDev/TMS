import Validator from 'validator';
import isEmpty from './isEmpty';

function validateRegisterInput(data){
    let errors={}
    data.name=!isEmpty(data.name) ? data.name: ''
    data.email=!isEmpty(data.email) ? data.email:''
    data.password=!isEmpty(data.password) ? data.email:''
    data.password_confirm=!isEmpty(data.password_confirm) ? data.password_confirm :''

    if(!Validator.isLength(data.name,{min:2,max:30})){
        errors.name='Nombre debe tener entre 2 y 30 letras'
    }

    if(Validator.isEmpty(data.name)){
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

    if(!Validator.isLength(data.password_confirm,{min:6,max:30})){
        errors.password_confirm='La contraseña debe tener minimo 6 caracteres '
    }

    if(!Validator.equals(data.password,data.password_confirm)){
        errors.password_confirm='Las contraseñas deben coincidir'
    }

    if(Validator.isEmpty(data.password_confirm)){
        errors.password_confirm='Contraseña es requerida'
    }

    return {
        errors,
        isValid:isEmpty(errors)
    }
}

export default validateRegisterInput;