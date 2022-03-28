import { Button, TextField } from "@material-ui/core"
import React, { useState } from 'react'
import Signup from '../signup/signup.js'

import './styles.css'

// label: default text; type: Textfield type

const Signin = () =>{
    // define a bunch of states, initial state false.
    // setShowSignup is of class SetStateAction
    const [showSignup, setShowSignup] = useState(false);
    const [loadingTime, setloadingTime] = useState(false);

    // whenever user click on create account, this function is triggered
    const toggleSignup = (e)=>{
        // prevent page from freshing
        e.preventDefault()
        setloadingTime(true)
        setTimeout(()=>{setShowSignup(true);setloadingTime(false)},200); //sleeps 500ms
        //setShowSignup(true)
    };

    

    // If else statement based on state: {setShowSignup ? () : () }
    return (
        <div className="login">
         {showSignup ? (
            <Signup setShowSignup={setShowSignup} />
         ) : (
        <div className="login__content">
            <div className="login__loading" />
  
            <div className={`login__wrapping ${loadingTime && "login__fade"}`}>
              <img
                className="login__logo"
                src="/assets/svg/google.svg"
                alt="Google"
              />
  
              <p className="login__title">Sign in</p>
              <p className="login__subtitle">Continue to Gmail</p>
  
              <form className="login__form">
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  type="email"
                  className="login__input"
          
                />
  
                <TextField
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  className="login__input"
                  type="password"
                />
  
                <div className="login__infoText">
                  Not your computer? Use guest mode to sign in privately?
                  <a href="/learnmore">Learn More</a>
                </div>
  
                <div className="login__buttons">
                  <Button
                    className="login__button"
                    color="primary"
                    onClick={toggleSignup}
                  >
                    Create Account
                  </Button>
  
                  <Button
                    className="login__button"
                    color="primary"
                    variant="contained"
                  >
                    Sign in
                  </Button>
                </div>
  
              </form>
  
            </div>
          </div>
         )}
    </div>
    )
}

export default Signin