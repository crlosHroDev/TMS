import Validator from 'validator';
import isEmpty from './isEmpty';

function validateLoginInput(data){
    let errors={}
    data.email=!isEmpty(data.email) ? data.email:''
    data.password=!isEmpty(data.password) ? data.password:''

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

export default validateLoginInput;