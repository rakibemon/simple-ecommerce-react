import React from 'react';
import { Link,useLocation,useHistory } from 'react-router-dom';
import {Button} from 'react-bootstrap';
import './Login.css'
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {googleSignIn} = useAuth();
    const location = useLocation();
    console.log('come from' , location.state?.from); //pathname keno dissi na
    const redirect_uri = location.state?.from || '/shop' 
    const history = useHistory();

    const handleSigninWithGoogle = () =>{
        googleSignIn()
        .then(userCredential=>{
            history.push(redirect_uri) //direct history.push na diea then er kaj ki ?
        })
    }
    return (
        <div className='form-container'>
            <div>
                <h3> Log in</h3>
                <form className='form'>
                    <input type="email" name="" id="email" placeholder='enter you mail'/> <br />
                    <input type="password" name="" id="password" placeholder='password' /> <br />
                    <Button as="input" type="submit" value="Submit" variant='info'/>
                    <p> New to Ema-Jhon website <Link to='/register'> create a account</Link></p>
                    <div> ------------------ or ----------------</div>
                    <Button onClick={handleSigninWithGoogle} variant='info'>Google sign in</Button>
                </form>
            </div>
        </div>
    );
};

export default Login;