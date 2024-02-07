import "./register.css";
import { useRef } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Register() {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const navigate = useNavigate();

    const handleClick = async (e) => {
        e.preventDefault();
        if (passwordAgain.current.value !== password.current.value) {
            passwordAgain.current.setCustomValidity("Passwords don't match");
        } else {
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
            };
            try {
                // await axios.post("/api/auth/register", user);
                await axios.post("http://localhost:8800/api/auth/register", user);

                navigate('/login');
            } catch(err) {
                console.log(err);
            }
        }
    }

const handleLoginClick=()=>{
    navigate("/login")
}


    return (
        <div className="login">
            <div className="loginwrapper">
                <div className="loginleft">
                    <h3 className="loginlogo">Socialapp</h3>
                    <span className="logindesc">Connect with friends and the world around you on Socialapp.</span>
                </div>
                <div className="loginright">
                    <form className="loginBox" onSubmit={handleClick}>
                        <input placeholder="Username" required ref={username} className="logininput" name="username" />
                        <input placeholder="Email" required ref={email} className="logininput" type="email" name="email" />
                        <input placeholder="Password" required ref={password} minLength="6" className="logininput" type="password" name="password" />
                        <input placeholder="Password Again" required ref={passwordAgain} className="logininput" type="password" name="passwordAgain" />
                        <button className="loginbutton" type="submit">Sign up</button>
                        <button className="loginregisterbutton" onClick={handleLoginClick}>Log into Account</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register;
