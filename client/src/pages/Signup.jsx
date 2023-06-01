import React, { useState, useEffect } from 'react';
import Layout from "../components/Layout";
import { NavLink } from "react-router-dom";
import axios from 'axios';

import "../styles/Login.css";

function Signup(props) {
    const [check, setCheck] = useState(true);
    const [firstname, setFirstName] = useState(null);
    const [lastname, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [nins, setNins] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState(null);
    const [items, setItems] = useState([
        { id: 1, name: "Item 1" },
        { id: 2, name: "Item 2" },
        { id: 3, name: "Item 3" },
    ]);

    const firstNameHandler = (value) => {
        setFirstName(value);
    }

    const lastnameHandler = (value) => {
        setLastName(value);
    }

    const emailHandler = (value) => {
        setEmail(value);
    }

    const ninshandler = (value) => {
        setNins(value);
    }

    const passwordHandler = (value) => {
        setPassword(value);
    }

    const handleCheckboxChange = () => {
        setCheck((value) => !value);
    }

    const signupStudentService = async (e) => {
        e.preventDefault();

        const stringRegex = /^[a-zA-Z]+$/;
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        const identifierRegex = /^(?:2[0-9]{6}|[3-4][0-9]{6}|5000000)$/;

        if (!stringRegex.test(firstname)) {
            setError("firstname must be only characters");
        } else if (!stringRegex.test(lastname)) {
            setError("lastname must be only characters");
        } else if (!emailRegex.test(email)) {
            setError("email formed incorrectly");
        } else if (!identifierRegex.test(nins)) {
            setError("Numero inscription is invalid");
        } else {
            try {
                const response = await axios.post('http://localhost:3006/student', {
                    "firstname": firstname,
                    "lastname": lastname,
                    "password": password,
                    "cardID": nins,
                    "email": email,
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                console.log(response.data);
                window.location.href = 'http://localhost:3000/login';
            } catch (error) {
                console.error(error);
            }
        }
    }

    useEffect(() => {
        // Fetch items from table or API
        const fetchItems = async () => {
            try {
                const response = await axios.get('http://localhost:3006/items');
                setItems(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchItems();
    }, []);

    return (
        <Layout isConnected={props.isConnected}>
            <div className="form-container">
                <label className="switch">
                    <input
                        className="inpt"
                        type="checkbox"
                        checked={check}
                        onChange={handleCheckboxChange}
                    />
                    <span className="slider"></span>
                </label>
                {!check ? (
                    <>
                        <p className="title">Student SignUp</p>
                        <form className="form-log" onSubmit={(e) => signupStudentService(e)}>
                            <div className="input-group">
                                <label htmlFor="firstName">First name</label>
                                <input type="text" name="firstName" id="firstName" placeholder="" required onChange={(e) => firstNameHandler(e.target.value)} />
                            </div>
                            <div className="input-group">
                                <label htmlFor="lastName">Last name</label>
                                <input type="text" name="lastName" id="lastName" placeholder="" required onChange={(e) => lastnameHandler(e.target.value)} />
                            </div>
                            <div className="input-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" id="email" placeholder="" required onChange={(e) => emailHandler(e.target.value)} />
                            </div>
                            <div className="input-group">
                                <label htmlFor="Nins">Numero inscription</label>
                                <input type="number" name="Nins" id="Nins" placeholder="" required onChange={(e) => ninshandler(e.target.value)} />
                            </div>
                            <div className="input-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" id="password" placeholder="" required onChange={(e) => passwordHandler(e.target.value)} />
                            </div>
                            <div className="input-group dropdown">
                                <label htmlFor="items">Items</label>
                                <div className="select-wrapper">
                                    <select name="items" id="items">
                                        {items.map((item) => (
                                            <option key={item.id} value={item.name}>
                                                {item.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <br />
                            <button className="sign">Sign up</button>
                        </form>
                        <div className="social-message">
                            <div className="line"></div>
                            <p className="message">Sign up with social accounts</p>
                            <div className="line"></div>
                        </div>
                        <div className="social-icons">
                            <button aria-label="Log in with Google" className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                    <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                                </svg>
                            </button>
                        </div>
                        <p className="signup">
                            you have an account?
                            <NavLink to={"/login"}>
                                <a rel="noopener noreferrer" href="#" className="">Log in</a>
                            </NavLink>
                        </p>
                    </>
                ) : (
                    <>
                        <p className="title">Restaurant SignUp</p>
                        <form className="form">
                            <div className="input-group">
                                <label htmlFor="Name">Name</label>
                                <input type="text" name="Name" id="Name" placeholder="" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="idendity">Identity</label>
                                <input type="text" name="idendity" id="idendity" placeholder="" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="Location">Location</label>
                                <input type="text" name="Location" id="Location" placeholder="" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="phone">Phone Number</label>
                                <input type="number" name="phone" id="phone" placeholder="" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="Capacity">Capacity</label>
                                <input type="number" name="Capacity" id="Capacity" placeholder="" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" id="password" placeholder="" />
                            </div>
                            <br />
                            <button className="sign">Sign up</button>
                        </form>
                        <div className="social-message">
                            <div className="line"></div>
                            <p className="message">Sign up with social accounts</p>
                            <div className="line"></div>
                        </div>
                        <div className="social-icons">
                            <button aria-label="Log in with Google" className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                    <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                                </svg>
                            </button>
                        </div>
                        <p className="signup">
                            you have an account?
                            <NavLink to={"/login"}>
                                <a rel="noopener noreferrer" href="#" className="">Log in</a>
                            </NavLink>
                        </p>
                    </>
                )}
            </div>
        </Layout>
    );
}

export default Signup;
