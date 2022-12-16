import classes from '../../../components/MainHeader.module.css';
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Card, Button } from 'react-bootstrap';
import { useState } from 'react';
// import { useRef } from "react";
// import AddUser from "./AddUser";

const ContactUs = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const addUserHandler = (user) => {
    console.log(user);
     fetch(
      "https://ecom-website-eb6b8-default-rtdb.firebaseio.com/users.json",
      {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((result) => {
        result.json().then((data) => {
          console.log(data);
        })
    })
    // const data = await response.json();
    // console.log(data);
    // user.id = data.name;
    // setUsers([...users, user])
  };

  function submitHandler(event){
    event.preventDefault();
    const user = {
      name, 
      email,
      phone
    }
    addUserHandler(user);
    console.log(user);
  }
  const nameChangeHandler = (event) => {
    setName(event.target.value);
  }
  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  }
  const phoneChangeHandler = (event) => {
    setPhone(event.target.value);
  }
  return (
    <>
      <header className={classes.header}>
        <Navbar className="justify-content-center" bg="dark" variant="dark">
          <Nav>
            <NavLink
              activeClassName={classes.active}
              to="/home"
              className="me-5"
            >
              HOME
            </NavLink>
            <NavLink
              activeClassName={classes.active}
              to="/store"
              className="me-5"
            >
              STORE
            </NavLink>
            <NavLink
              activeClassName={classes.active}
              to="/about"
              className="me-5"
            >
              ABOUT
            </NavLink>
            <NavLink
              activeClassName={classes.active}
              to="/contactus"
              className="me-5"
            >
              CONTACT US
            </NavLink>
          </Nav>
        </Navbar>
      </header>
      {/* <AddUser onAddUser={props.onAddUser} /> */}
      <Card className={classes.card}>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="name">Name</label>
        <input type="text" id="name" value={name} onChange={nameChangeHandler} /></div>
        <div className={classes.control}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={email} onChange={emailChangeHandler} />
        </div>
       <div className={classes.control}>
       <label htmlFor="phone">Phone</label>
        <input type="number" id="phone" value={phone} onChange={phoneChangeHandler} />
       </div>
        <div>
        <Button type='submit' variant='dark' style={{marginBottom: '10px', fontFamily: 'Verdana'}}>Submit</Button>
        </div>
      </form>
      </Card>
    </>
  );
};

export default ContactUs;
