import React from 'react';
import Layout from '../components/Layout';
import '../styles/Settings.css';
import useResto from "../context/RestoContext";
import useUser from "../context/UserContext";
import axios from 'axios';
import JwtToken from "../JwtToken";

function Settings() {
    const { myResto, setMyResto } = useResto();
    const { myUser, setMyUser } = useUser();
    const [firstName, setFirstName] = React.useState(myUser?.firstname);
    const [lastName, setLastName] = React.useState(myUser?.lastname);
    const [email, setEmail] = React.useState(myUser?.email);
    const [password, setPassword] = React.useState();
    const [confirmPassword, setConfirmPassword] = React.useState("");
    const firstNameChange = (e) => {
        setFirstName(e.target.value);
    };
    const lastNameChange = (e) => {
        setLastName(e.target.value);
    };
    const emailChange = (e) => {
        setEmail(e.target.value);
    };
    const passwordChange = (e) => {
        setPassword(e.target.value);
    };
    const confirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };
    const UserSettings = async (e) => {
        e.preventDefault();
        if (password == null) {
            await axios.patch(`http://localhost:3006/student/${myUser.id}`, {
                "firstname": firstName,
                "lastname": lastName,
                "email": email,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then((response) => {
                const token = response.data.token;
                localStorage.setItem("token", token);
                JwtToken(token);
            }).catch((error) => {
                alert(error.response.data.message);
            });
        }
        else if (password != null) {
            if (password === confirmPassword) {
                await axios.patch(`http://localhost:3006/student/${myUser.id}`, {
                    "firstname": firstName,
                    "lastname": lastName,
                    "password": password,
                    "email": email,
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }).then((response) => {
                    const token = response.data.token;
                    localStorage.setItem("token", token);
                    JwtToken(token);
                    
                }).catch((error) => {
                    alert(error.response.data.message);
                });
            }
            else {
                alert("Password and confirm password must be the same");
            }
        }
    }
    const [restoName, setRestoName] = React.useState(myResto?.name);
    const [restoPhone, setRestoPhone] = React.useState(myResto?.telephone);
    const [restoIdentity, setRestoIdentity] = React.useState(myResto?.identifiant);
    const [restoPassword, setRestoPassword] = React.useState();
    const [restoConfirmPassword, setRestoConfirmPassword] = React.useState("");
    const restoNameChange = (e) => {
        setRestoName(e.target.value);
    };
    const restoPhoneChange = (e) => {
        setRestoPhone(e.target.value);
    };
    const restoPasswordChange = (e) => {
        setRestoPassword(e.target.value);
    };
    const restoConfirmPasswordChange = (e) => {
        setRestoConfirmPassword(e.target.value);
    };
    const restoIdentityChange = (e) => {
        setRestoIdentity(e.target.value);
    };
    const RestoSettings = async (e) => {
        e.preventDefault();
        if (restoPassword == null) {
            await axios.patch(`http://localhost:3006/restaurant/${myResto.id}`, {
                "name": restoName,
                "identifiant": restoIdentity,
                "telephone": restoPhone,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then((response) => {
                const token = response.data.token;
                localStorage.setItem("token", token);
                JwtToken(token);
                window.location.href ='http://localhost:3000/settings'
            }).catch((error) => {
                alert(error.response.data.message);
            });
        }
        else if (restoPassword != null) {
            if (restoPassword === restoConfirmPassword) {
                await axios.patch(`http://localhost:3006/student/${myUser.id}`, {
                    "name": restoName,
                    "identifiant": restoIdentity,
                    "telephone": restoPhone,
                    "password": restoPassword,
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }).then((response) => {
                    const token = response.data.token;
                    localStorage.setItem("token", token);
                    JwtToken(token);
                    window.location.href = 'http://localhost:3000/settings'
                }).catch((error) => {
                    alert(error.response.data.message);
                });
            }
            else {
                alert("Password and confirm password must be the same");
            }
        }
    }
    return (
        <Layout >
            {myUser ? (<div className="container-settings">
                <div className="profile-picture">
                    <img src={require("../images/banner.jpg")} alt="Profile Picture" className="rounded-img" />
                    <input type="file" id="profilePictureInput" className="file-input" />
                    <label htmlfor="profilePictureInput" className="file-input-label">Choose a profile picture</label>
                </div>
                <h1 className="titl">Edit Profile</h1>
                <form className="form-settings" onSubmit={(e) => UserSettings(e)}>
                    <div className="form-group">
                        <label htmlfor="firstName">First Name:</label>
                        <input type="text" id="firstName" className="form-control" placeholder="Enter first name" defaultValue={myUser.firstname} onChange={(e) => firstNameChange(e)} />
                    </div>
                    <div className="form-group">
                        <label htmlfor="lastName">Last Name:</label>
                        <input type="text" id="lastName" className="form-control" placeholder="Enter  last name" defaultValue={myUser.lastname} onChange={(e) => lastNameChange(e)} />
                    </div>
                    <div className="form-group">
                        <label htmlfor="email">Email:</label>
                        <input type="email" id="email" className="form-control" placeholder="Enter  email address" defaultValue={myUser.email} onChange={(e) => emailChange(e)} />
                    </div>
                    <div className="form-group">
                        <label htmlfor="password">Password:</label>
                        <input type="password" id="password" className="form-control" placeholder="Enter  password" defaultValue={myUser.password} onChange={(e) => passwordChange(e)} />
                    </div>
                    <div className="form-group">
                        <label htmlfor="confirmPassword">Confirm Password:</label>
                        <input type="password" id="confirmPassword" className="form-control" placeholder="Confirm password" defaultValue={myUser.password} onChange={(e) => confirmPasswordChange(e)} />
                    </div>
                    <button type="submit" className="btn btnSave" style={{ marginLeft: 'auto' }}>Save Changes</button>

                </form>
                <button type="submit" className="btn btnCancel" style={{ marginLeft: 'auto' }}>Cancel</button>
            </div>) : (<div className="container-settings">
                <div className="profile-picture">
                    <img src={require("../images/banner.jpg")} alt="Profile Picture" className="rounded-img" />
                </div>
                <h1 className="titl">Edit Profile</h1>
                <form className="form-settings" onSubmit={(e) => RestoSettings(e)}>
                    <div className="form-group">
                        <label htmlfor="Name">Name:</label>
                        <input type="text" id="Name" className="form-control" placeholder="Enter name" onChange={(e) => restoNameChange(e)} defaultValue={restoName} />
                    </div>
                    <div className="form-group">
                        <label htmlfor="idendity">idendity</label>
                        <input type="text" id="idendity" className="form-control" placeholder="Enter  idendity" onChange={(e) => restoIdentityChange(e)} defaultValue={restoIdentity} />
                    </div>
                    <div className="form-group">
                        <label htmlfor="pnum">Phone Number</label>
                        <input type="number" id="email" className="form-control" placeholder="Enter  phone number" onChange={(e) => restoPhoneChange(e)} defaultValue={restoPhone} />
                    </div>
                    <div className="form-group">
                        <label htmlfor="password">Password:</label>
                        <input type="password" id="password" className="form-control" placeholder="Enter  password" onChange={(e) => restoPasswordChange(e)} />
                    </div>
                    <div className="form-group">
                        <label htmlfor="confirmPassword">Confirm Password:</label>
                        <input type="password" id="confirmPassword" className="form-control" placeholder="Confirm password" onChange={(e) => restoConfirmPasswordChange(e)} />
                    </div>
                    <button type="submit" className="btn btnSave" style={{ marginLeft: 'auto' }}>Save Changes</button>

                </form>
                <button type="submit" className="btn btnCancel" style={{ marginLeft: 'auto' }}>Cancel</button>
            </div>)}
        </Layout>
    );
}

export default Settings;
