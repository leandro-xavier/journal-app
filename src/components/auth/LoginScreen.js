import React from 'react';
import {Link} from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import {useDispatch} from 'react-redux';
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';
import { useSelector } from 'react-redux';

export const LoginScreen = () => {

    const dispatch = useDispatch()
    const {loading} = useSelector(state => state.ui)

    const [formValues, handleInputChange] = useForm({
        email: 'leandro@gmail.com',
        password: '123456'
    })

    const {email, password} = formValues;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(startLoginEmailPassword(email, password))
    }

    const handleGoogleLogin =() => {
        dispatch(startGoogleLogin())
    }
  
    return (
        <div>
           <h3 className="auth__title">Login</h3>
           <form onSubmit={handleLogin}>
               <input className="auth__input" type="text" placeholder="email" name="email" autoComplete="off" value={email} onChange={handleInputChange}/>
               <input className="auth__input" type="password" placeholder="password" name="password" value={password} onChange={handleInputChange}/>
               <button className="btn btn-primary btn-block" type="submit" disabled={loading} >Login</button>
               <hr />
               <div className="auth__social-networks">
                   <p>Login with social network</p>
                    <div className="google-btn" onClick={handleGoogleLogin}>
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
               </div>
               <Link className="link" to="/auth/register">Create new account</Link>
           </form>
        </div>
    )
}
