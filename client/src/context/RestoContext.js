import React, { useContext, useState } from "react";
import jwt_decode from "jwt-decode";
import JwtToken from "../JwtToken";

const RestoContext = React.createContext();
export const RestoProvider = ({ children }) => {
    const [myResto, setMyResto] = useState(null);
    const token = localStorage.getItem("token");

    if (token && !myResto) {
        try {
            const user = jwt_decode(token);
            if (user["identifiant"]) {
                setMyResto(user);
                JwtToken(token);
            }
        } catch (error) {
            console.log(error);
            localStorage.removeItem("token");
            setMyResto(null);
        }
    }
    return (
        <RestoContext.Provider value={{ myResto, setMyResto }}>
            {children}
        </RestoContext.Provider>);
}

const useResto = () => useContext(RestoContext);
export default useResto;