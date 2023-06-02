import React, { useContext, useState } from "react";
import jwt_decode from "jwt-decode";
import JwtToken from "../JwtToken";

const UserContext = React.createContext(null);
export const UserProvider = ({ children }) => {
    const [myUser, setMyUser] = useState(null);
    const token = localStorage.getItem("token");
    if (token && !myUser) {
        try {
            const user = jwt_decode(token);
            if (user["cardID"]) {
                setMyUser(user);
                JwtToken(token);
            }
        } catch (error) {
            console.log(error);
            localStorage.removeItem("token");
            setMyUser(null);
        }
    }
    return (
        <UserContext.Provider value={{ myUser, setMyUser }}>
            {children}
        </UserContext.Provider>);
}

const useUser = () => useContext(UserContext);
export default useUser;