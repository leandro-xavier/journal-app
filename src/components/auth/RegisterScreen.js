import React from 'react';
import {Link} from 'react-router-dom'
import { useForm } from '../../hooks/useForm';
import validator from 'validator';
import { useDispatch } from 'react-redux';
import { setError, setRemoveError } from '../../actions/ui';
import { useSelector } from 'react-redux';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';

export const RegisterScreen = () => {

    const dispatch = useDispatch();

    const {msgError} = useSelector(state => state.ui);

    

const [formValues, handleInputChange] = useForm({
    name: 'Leandro',
    email: 'leandro@gmail.com',
    password: '123456',
    password2: '123456'
})

const {name, email, password, password2} = formValues;

const handleRegister = (e) => {
    e.preventDefault();
  

    if(isFormValues()){
        dispatch(startRegisterWithEmailPasswordName(email,password,name))
    }
}

//manejo de errores del formulario 



const isFormValues = () => {

    if(name.trim().length === 0 ){
        dispatch(setError('name is required'))
        return false
    }else if (!validator.isEmail(email)){
        dispatch(setError('este correo no es valido'))
        return false
    }else if (password !== password2 || password.length < 5 ){
        dispatch(setError('las contraseñas no son correctas y debe tener mas de 6 caracteres'))
        return false
    }

    dispatch(setRemoveError())

    return true
}
    return (
        <div>
             <div>
           <h3 className="auth__title">Register</h3>
           <form action="" onSubmit={handleRegister}>
              {
                msgError && 
                (
                    <div className="auth__alert-error">
                    {msgError}
                     </div>
                )
              
              }
              
           <input className="auth__input" type="text" placeholder="Name" name="name" autoComplete="off" value={name} onChange={handleInputChange}/>
               <input className="auth__input" type="text" placeholder="email" name="email" autoComplete="off" value={email} onChange={handleInputChange}/>
               <input className="auth__input" type="password" placeholder="password" name="password" value={password} onChange={handleInputChange}/>
               <input className="auth__input" type="password" placeholder="confirm password" name="password2" value={password2} onChange={handleInputChange}/>
               <button className="btn btn-primary btn-block mb-5" type="submit" >Register</button>
            
               <Link className="link " to="/auth/login">Already register?</Link>
           </form>
        </div>
        </div>
    )
}

