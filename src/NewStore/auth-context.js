import React,{useState} from "react";

const AuthContext = React.createContext({
    token: '',
    email: '',
    isLoggedIn: false,
    login: (token) => {},
    logout: () => {},
});

export const AuthContextProvider = (props) => {
    const initialEmail = localStorage.getItem('email')
    const [email, setEmailId] = useState(initialEmail);
    const initialToken = localStorage.getItem('token');
    const [token, setToken] = useState(initialToken);

    const userIsLoggedIn = !!token;

    const logInHandler = (token, email) => {
        localStorage.setItem('token', token)
        setToken(token);
        
        setEmailId(email);
    };

    const logOutHandler = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('email')
        setToken(null);
    };
    const contextValue = {
        token: token,
        email: email,
        isLoggedIn: userIsLoggedIn,
        login: logInHandler,
        logout: logOutHandler,
    }

    return ( <AuthContext.Provider value={contextValue}>
        {props.children}
    </AuthContext.Provider>
    )
};

export default AuthContext;