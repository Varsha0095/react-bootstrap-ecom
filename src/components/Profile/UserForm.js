import ProfileForm from './ProfileForm';
import classes from './UserForm.module.css';
import { NavLink } from 'react-router-dom';
import MainHeader from '../Header/MainHeader';

const UserForm = () => {
    return (
        <>
        <MainHeader>
            <NavLink
              activeClassName={classes.active}
              to="/profile"
              className="me-5"
            >
              PROFILE
            </NavLink>
        </MainHeader>
        <section className={classes.profile}>
            <h1>Your User Profile</h1>
            <ProfileForm />
        </section>
        </>
    )
};

export default UserForm;