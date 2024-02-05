import { useContext, useRef } from "react"
import "./login.css"
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext"



function Login() {
    const email = useRef();
    const password = useRef()
    const { user, isFetching, error, dispatch } = useContext(AuthContext)



    const handleClick = (e) => {
        e.preventDefault();
        loginCall({ email:email.current.value, password:password.current.value }, dispatch)
    }
    console.log(user)
    return (
        <div className="login">
            <div className="loginwrapper">
                <div className="loginleft">
                    <h3 className="loginlogo">Socialapp</h3>
                    <span className="logindesc">Connect with friends and the world around you on Socialapp.</span>

                </div>
                <div className="loginright">

                    <form className="loginBox" onSubmit={handleClick}>
                        <input placeholder="Email" type="email" required className="logininput" ref={email} />
                        <input placeholder="Password" type="password" required minLength="6" className="logininput" ref={password} />
                        <button className="loginbutton">Log in</button>
                        <span className="loginForgot">Forgot Password</span>
                        <button className="loginregisterbutton">Create a new Account</button>

                    </form>
                </div>

            </div>
        </div>
    )
}

export default Login
