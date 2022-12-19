import React, {useState, useRef} from "react";
// import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import MainHeader from "../Header/MainHeader";
import classes from "./LoginForm.module.css";

const LoginForm = () => {
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const switchLoginModeHandler = () => {
        setIsLogin ((prevState) => !prevState)
    }
    const submitHandler = (event) => {
        event.preventDefault();

        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        setIsLoading(true);
        if(isLogin){
        }else{
            fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBr0Gx0rDLDqMfMoJqb7ts5a1qiJCGVTTY',{
                method: 'POST',
                body: JSON.stringify({
                    email: enteredEmail,
                    password: enteredPassword,
                    returnSecureToken: true
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then((res) => {
                setIsLoading(false);
                if(res.ok){
                    //...
                } else {
                    return res.json().then((data) => {
                    //show error modal
                    let errorMessage = 'Authentication Failed !'
                    if(data && data.error && data.error.message){
                        errorMessage = data.error.message;   
                    }
                    alert(errorMessage);
                    })
                }
            })
        }

    }
    return (
        <React.Fragment>
           <MainHeader>
           <NavLink to="/login" className="me-5">
                    LOGIN
                    </NavLink>
           </MainHeader>
           <section className={classes.login}>
            <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
           <form onSubmit={submitHandler}>
            <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input id="email" type='email' ref={emailInputRef} />
            </div>
         <div className={classes.control}>
         <label htmlFor="password">Your Password</label>
            <input id="password" type="password" ref={passwordInputRef} />
         </div>
            <div className={classes.actions}>
               {!isLoading && <button>{isLogin ? 'Login' : 'Create Account'}</button>}
               {isLoading && <p>Sending Request...</p>} 
            <button type="button" className={classes.toggle} onClick={switchLoginModeHandler}>{isLogin ? 'Create New Account' : 'Login with existing account'}</button>
            </div>
        </form>
           </section>
          
        </React.Fragment>
 
    )
}

export default LoginForm;