import React from 'react'
import "./Task.css"
import { Link } from 'react-router-dom'

function Tasks() {
    return (
        <div>
            <div className="container">
                <div className="wrapper">
                    <div>
                        <img src="assets/instagram.png" alt="" />
                        <h3>Hydrogen Payroll</h3>
                        <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            qui dolores dolore non ex debitis id, sequi maxime iure in!
                        </p>
                        <div className="nav-bottom">
                            <Link to="/">Contact us</Link>
                            <Link to="/">Legal</Link>
                            <Link to="/">Privacy</Link>
                    </div>
                    </div>
                    
                </div>
                <div className="welcome-wrapper">
                    <h2>Welcome back</h2>
                    <div className="login-wrapper">
                        <p className='login'>Login into your hydrogen dashboard
                            with your credentials
                        </p>
                    </div>
                    <form action="">
                       <div className="Email-input">
                            <label>Email or Phone number</label> <br />
                            <input type="text" placeholder="Enter your email address or phone number" />
                       </div>
                        <div className="password-input">
                            <div>
                                <label>Password</label>  
                                <Link to="/">Forget Password</Link>
                            </div>
                            <input type="password" placeholder="***********" />
                        </div>
                        <div className='check-box'>
                             <input type="checkbox" /> <span>Remember me</span>
                        </div>
                        <button>Login</button>
                    </form>
                   <div className="join">
                            <p>Don't have an account yet? <span>Join Hydrogen Payroll</span></p>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Tasks
