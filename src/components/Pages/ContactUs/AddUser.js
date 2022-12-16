// import React, { useRef } from 'react';
// import classes from './AddUser.module.css';
// import { Button, Card } from 'react-bootstrap';

// function AddUser(props) {
//     const nameRef = useRef('');
//     const emailRef = useRef('');
//     const phoneRef = useRef('');
  
//     function submitHandler(event) {
//       event.preventDefault();
      
  
//       // could add validation here...
  
//       const user = {
//        name: nameRef.current.value,
//         email: emailRef.current.value,
//        phone: phoneRef.current.value,
//       };
  
//       props.onAddUser(user);
//     }
  
//     return (
//       <Card className={classes.card}>
//         <form onSubmit={submitHandler}>
//           <div className={classes.control}>
//             <label htmlFor="name">Name</label>
//         <input type="text" id="name" ref={nameRef} /></div>
//         <div className={classes.control}>
//         <label htmlFor="email">Email</label>
//         <input type="email" id="email" ref={emailRef} />
//         </div>
//        <div className={classes.control}>
//        <label htmlFor="phone">Phone</label>
//         <input type="number" id="phone" ref={phoneRef} />
//        </div>
//         <div>
//         <Button variant='dark' style={{marginBottom: '10px', fontFamily: 'Verdana'}} onClick={AddUser}>Submit</Button>
//         </div>
//       </form>
//       </Card>
//     );
//   }
  
//   export default AddUser;