import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { NavLink } from 'react-router-dom';
import '../styles/Login.css';
import axios from 'axios';

function Login(props) {
    const [identifier, setIdentifier] = useState(null);
    const [password, setPassword] = useState(null);
    const [error,setError]=useState(null);

    const identifierHandler = (value) => {
        setIdentifier(value);


  
    };

    const passwordHandler = (value) => {
        setPassword(value);
    };

    const loginService = (e) => {
        e.preventDefault();
        const identifierRegex = /^(?:2[0-9]{6}|[3-4][0-9]{6}|5000000)$/;
        if (!identifierRegex.test(identifier)||!identifier) {
            setError("id wrong")
        }
        else {

            /*axios
                .get(`http://localhost:3006/student/identifier/${identifier}`)
                .then((response) => {
                    console.log(response);
                    if(!response.data){
                        setError("id wrong")
                    }
                    else if (response.data.password === password) {
                        console.log('ok');
                        window.location.href = 'http://localhost:3000/';
                    } else {
                        setError('Password is wrong');
                    }
                })
                .catch((error) => {
                    console.error(error);
                });*/
            const user = {  };

            props.userConnected(user);
            window.location.href = 'http://localhost:3000/';
        }
    };

    return (
        <Layout isConnected={props.isConnected}>
            <div className="form-container">
                <p className="title">Login</p>
                <form className="form" onSubmit={loginService}>
                    <div className="input-group">
                        <label htmlFor="identifier">identifier</label>
                        <input
                            type="text"
                            name="identifier"
                            id="identifier"
                            placeholder="identifier"
                            onChange={(e) => identifierHandler(e.target.value)}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            onChange={(e) => passwordHandler(e.target.value)}
                        />
                        <div className="forgot">
                            <a rel="noopener noreferrer" href="#">
                                Forgot Password?
                            </a>
                        </div>
                    </div>
                    <button type="submit" className="sign">
                        Sign in
                    </button>
                </form>
                <p className='errorMessage'>{error}</p>
                <div className="social-message">
                    <div className="line"></div>
                    <p className="message">Login with social accounts</p>
                    <div className="line"></div>
                </div>
                <div className="social-icons">
                    <button
                        type="button"
                        aria-label="Log in with Google"
                        className="icon"
                        onClick={(e) => loginService(e)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                            className="w-5 h-5 fill-current"
                        >
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                    </button>
                </div>
                <p className="signup">
                    Don't have an account?
                    <NavLink to={'/signup'}>
                        <a rel="noopener noreferrer" href="#" className="">
                            {' '}
                            Sign up
                        </a>
                    </NavLink>
                </p>
            </div>
        </Layout>
    );
}

export default Login;
