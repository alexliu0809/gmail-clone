import React from "react";

import { Button, Checkbox, FormControlLabel, TextField } from "@material-ui/core"
import './styles.css'

// can take an argument when being initiated, which in this case is showSignup defined in signin.js
// It's passed as an obj
const Signup = (myArgShowSignup) => {
    console.log(myArgShowSignup)

    const toggleSignup = (e)=>{
        e.preventDefault()
        myArgShowSignup.setShowSignup(false)
        //myArgShowSignup.showSignUp = false
    };
    return (
        <div className="signup__container">
           <div className="signup">
                <div className="login__loading signup__loading">
                </div>

                <div className="signup__container">
                    <div className="signup__left">
                        <img className="login__logo" src="/assets/svg/google.svg" alt="Google Logo">
                        </img>

                        <h1 className="signup__heading">
                            Create Your Google Account
                        </h1>
                        <p className="signup__subheading">
                            Continue to Gmail
                        </p>

                        <div className="signup__inputs">
                            <div className="signup__nameInputs">
                                <TextField
                                id="outlined-basic"
                                label="First Name"
                                variant="outlined"
                                className="signup__nameInput"
                                type="name"
                                />

                                <TextField
                                id="outlined-basic"
                                label="Last Name"
                                variant="outlined"
                                className="signup__nameInput"
                                type="name"
                                />
                            </div>

                            <TextField
                                id="outlined-basic"
                                label="Email"
                                helperText="You can use letters, numbers and periouds"
                                variant="outlined"
                                type="email"
                                />
                            
                            <div className="signup__passwordInputs">
                                <div className="signup__passwordWrapper">
                                    <TextField
                                    id="outlined-basic"
                                    label="Password"
                                    variant="outlined"
                                    className="signup__passwordInput"
                                    type="password"
                                    />

                                    <TextField
                                    id="outlined-basic"
                                    label="Confirm"
                                    variant="outlined"
                                    className="signup__passwordInput"
                                    type="password"
                                    />
                                </div>
                                <p className="signup__helpertext">
                                        Use 8 or more charaters with a a mix of letters, numbers and symbols.
                                    </p>

                                <FormControlLabel control={<Checkbox name='checkedB' color='primary' />} label="Show password">
                                </FormControlLabel>  
                            </div>


                            <div className="signup__buttons">
                                <Button
                                className="signup__button"
                                variant="text"
                                color="primary"
                                onClick={toggleSignup}
                                >
                                Sign in instead
                                </Button>

                                <Button
                                className="signup__button"
                                variant="contained"
                                color="primary"
                                >
                                Create
                                </Button>
                            </div>
                        </div>
                        
                    </div>

                    <figure className="signup__figure">
                            <img className="signup__figureImg" src="https://ssl.gstatic.com/accounts/signup/glif/account.svg" alt="Account" />
                            <figcaption className="signup__figcaption">
                                One Account

                            </figcaption>
                    </figure>
                </div>
           </div>
        </div>
    )
}

export default Signup