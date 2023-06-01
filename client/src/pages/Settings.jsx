import React from 'react';
import Layout from '../components/Layout';
import '../styles/Settings.css';
function Settings(props) {
    return (
        <Layout isConnected={props.isConnected}>
            {props.isUser ? (<div class="container-settings">
                <div class="profile-picture">
                    <img src={require("../images/banner.jpg")} alt="Profile Picture" class="rounded-img" />
                    <input type="file" id="profilePictureInput" class="file-input" />
                    <label for="profilePictureInput" class="file-input-label">Choose a profile picture</label>
                </div>
                <h1 class="titl">Edit Profile</h1>
                <form class="form-settings">
                    <div class="form-group">
                        <label for="firstName">First Name:</label>
                        <input type="text" id="firstName" class="form-control" placeholder="Enter first name" required />
                    </div>
                    <div class="form-group">
                        <label for="lastName">Last Name:</label>
                        <input type="text" id="lastName" class="form-control" placeholder="Enter  last name" required />
                    </div>
                    <div class="form-group">
                        <label for="email">Email:</label>
                        <input type="email" id="email" class="form-control" placeholder="Enter  email address" required />
                    </div>
                    <div class="form-group">
                        <label for="password">Password:</label>
                        <input type="password" id="password" class="form-control" placeholder="Enter  password" required />
                    </div>
                    <div class="form-group">
                        <label for="confirmPassword">Confirm Password:</label>
                        <input type="password" id="confirmPassword" class="form-control" placeholder="Confirm password" required />
                    </div>
                    <button type="submit" class="btn btnSave" style={{ marginLeft: 'auto' }}>Save Changes</button>

                </form>
                <button type="submit" class="btn btnCancel" style={{ marginLeft: 'auto' }}>Cancel</button>
            </div>) : (<div class="container-settings">
                <div class="profile-picture">
                    <img src={require("../images/banner.jpg")} alt="Profile Picture" class="rounded-img" />
                </div>
                <h1 class="titl">Edit Profile</h1>
                <form class="form-settings">
                    <div class="form-group">
                            <label for="Name">Name:</label>
                            <input type="text" id="Name" class="form-control" placeholder="Enter   name"  />
                    </div>
                    <div class="form-group">
                            <label for="idendity">idendity</label>
                            <input type="text" id="idendity" class="form-control" placeholder="Enter  idendity"  />
                    </div>
                    <div class="form-group">
                            <label for="pnum">Phone Number</label>
                        <input type="number" id="email" class="form-control" placeholder="Enter  phone number"  />
                    </div>
                    <div class="form-group">
                            <label for="Capacity">Capacity</label>
                            <input type="number" id="Capacity" class="form-control" placeholder="Enter Capacity"  />
                    </div>
                    <div class="form-group">
                        <label for="Password">Password:</label>
                        <input type="password" id="Password" class="form-control" placeholder="enter  password"  />
                    </div>
                    <button type="submit" class="btn btnSave" style={{ marginLeft: 'auto' }}>Save Changes</button>

                </form>
                <button type="submit" class="btn btnCancel" style={{ marginLeft: 'auto' }}>Cancel</button>
            </div>)}
        </Layout>
    );
}

export default Settings;
