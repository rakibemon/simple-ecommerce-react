import React from 'react';
import {Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='form-container'>
            <div>
                <h2> Create Account </h2>
                <form className='form'>
                <input type="email" name="" id="email" placeholder='enter you mail'/> <br />
                    <input type="password" name="" id="password" placeholder='password' /> <br />
                    <input type="password" name="" id="re-password" placeholder='Reenter-password' /> <br />
                    <Button as="input" type="submit" value="Submit" variant='info'/>
                    <p> Already have an account <Link to='/login'> Log in</Link></p>
                    <div> ------------------ or ----------------</div>
                    <Button variant='info'>Google sign in</Button>
                </form>
            </div>
        </div>
    );
};

export default Register;