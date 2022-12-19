import classes from '../Header/MainHeader.module.css';
import { NavLink } from "react-router-dom";
import { Card, Button } from 'react-bootstrap';
import { useState } from 'react';
import MainHeader from '../Header/MainHeader';
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
        <MainHeader>
        <NavLink
              activeClassName={classes.active}
              to="/contactus"
              className="me-5"
            >
              CONTACT US
            </NavLink>
        </MainHeader>
      {/* <AddUser onAddUser={props.onAddUser} /> */}
      <Card className={classes.card}>
        <Card.Header className={classes.cardheader}>
          Contact Us Form
        </Card.Header>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="name">Name</label>
        <input type="text" id="name" value={name} placeholder="abc" onChange={nameChangeHandler} /></div>
        <div className={classes.control}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={email} placeholder="abc@xyz.com" onChange={emailChangeHandler} />
        </div>
       <div className={classes.control}>
       <label htmlFor="phone">Phone</label>
        <input type="number" id="phone" value={phone} placeholder="91xxxxxxxxxx" onChange={phoneChangeHandler} />
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
