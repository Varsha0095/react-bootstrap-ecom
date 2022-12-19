import { useRef, useContext } from 'react';
import AuthContext from '../../NewStore/auth-context';
import classes from './ProfileForm.module.css';
import { useHistory } from 'react-router-dom';

const ProfileForm = () => {
    const history = useHistory();
    const authCtx = useContext(AuthContext);
    const newPasswordInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredNewPassword = newPasswordInputRef.current.value;

        fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBr0Gx0rDLDqMfMoJqb7ts5a1qiJCGVTTY', {
            method: 'POST',
            body: JSON.stringify({
                idToken: authCtx.token ,
                password: enteredNewPassword,
                returnSecureToken: false
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then ((res) => {
            //assumption: Authentication succeeded !
            history.replace('/');
        })
    }
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
            <label htmlFor="newpassword">New Password</label>
            <input id="newpassword" type="password" ref={newPasswordInputRef} />
            </div>
            <div className={classes.action}>
            <button>Change Password</button>
            </div>
        </form>
    )
};

export default ProfileForm;
