import React from "react";
import "./modal.css";
import tmsIcon from "../../images/delivery-softIcon.png";

function Modal(props) {
  return (
    <div className="modal">
        {/* <button className="closeButton" onClick={props.hideModal}>
          X
        </button> */}
        <nav className='navModal'>
          <ul className='loginSignup'>
            <li className='loginmodal'>Login</li>
            <li className='signUp'>SignUp</li>
          </ul>
        </nav>
        {/* <div className='signupCont'> */}
          <form className='signupForm'> 
            <label className=' image-replace cd-username'htmlFor='signup-username'>Usuario</label>
            <input className='Username' type='text' placeholder='Usuario' id='signup-username'></input>
            <label className=' image-replace cd-email'htmlFor='signup-email'>Email</label>
            <input className='Email' type='email' placeholder='Email' id='signup-email'></input>
          </form>
        </div>
    // </div>
  );
}


export default Modal;
