import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import './Login.css'
import {auth} from './Firebase'
function Login(){

    const history = useHistory();
    const [useremail, setUserEmail] = useState('');
    const [userpassword, setUserPassword] = useState('');

    const loginuser = event => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(useremail, userpassword)
        .then((auth) => {
            history.push('/')
            
        })
        .catch(e => alert(e.message))
    }

    const signupuser = event => {
        event.preventDefault();
        auth.createUserWithEmailAndPassword(useremail, userpassword)
        .then((auth) => {
            history.push('/')
            
        })
        .catch(e => alert(e.message))
    }

    return(
        <div className ="login">
            <Link>
            <img src ="./logo11.png"
            className = "login_logo"
            />
            </Link>
            <div className ="login_container">*
                <h1>
                    Sign In
                </h1>
                <form>
                    <h5>E-mail</h5>
                   <input value ={useremail} onChange ={ event => setUserEmail(event.target.value)} type = "email"/>
                   <h5>Passward</h5>
                   <input value ={userpassword} onChange ={ event => setUserPassword(event.target.value)} type = "password"/>
                   <button onClick ={loginuser} type ="submit" className ="submit_button">Sign In</button>
                </form>
                <p>By signing, you agree to our Terms & Conditions</p>
                <button onClick ={signupuser} type ="submit" className ="submit_button">Create Your Account</button>
            </div>

        </div>
    );
}

export default Login