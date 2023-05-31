import React from 'react'
import Layout from "../components/Layout";
import { NavLink } from "react-router-dom";

import "../styles/Login.css";

function Signup() {
    const [check,setCheck]=React.useState(true);
    const handleCheckboxChange = () => {
        setCheck((value) => value ? false : true);
        console.log(check)
    }
    return (
        <Layout>
            
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
                {!check ? (<><p className="title">Student SignUp</p><form className="form">
                    <div className="input-group">
                        <label htmlFor="firstName">First name</label>
                        <input type="text" name="firstName" id="firstName" placeholder="" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="lastName">Last name</label>
                        <input type="text" name="lastName" id="lastName" placeholder="" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" placeholder="" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="Nins">N inscription</label>
                        <input type="number" name="Nins" id="Nins" placeholder="" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" placeholder="" />
                    </div>
                    <br />
                    <button className="sign">Sign up</button>
                </form><div className="social-message">
                        <div className="line"></div>
                        <p className="message">Sign up with social accounts</p>
                        <div className="line"></div>
                    </div><div className="social-icons">
                        <button aria-label="Log in with Google" className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                            </svg>
                        </button>
                    </div><p className="signup">you have an account?
                        <NavLink to={"/login"}>
                            <a rel="noopener noreferrer" href="#" className="">Log in</a>
                        </NavLink>
                    </p></>):(<>
                        <p className="title">Restaurant SignUp</p>
                        <form className="form">
                            <div className="input-group">
                                <label htmlFor="Name">Name</label>
                                <input type="text" name="Name" id="Name" placeholder="" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="idendity">idendity</label>
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
                        <p className="signup">you have an account?
                            <NavLink to={"/login"}>
                                <a rel="noopener noreferrer" href="#" className="">Log in</a>
                            </NavLink>
                        </p>
                    </>)}
            </div>
        </Layout>
    )
}

export default Signup
