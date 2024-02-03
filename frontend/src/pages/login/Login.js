import "./login.css"

function Login() {
    return (
        <div className="login">
            <div className="loginwrapper">
                <div className="loginleft">
                    <h3 className="loginlogo">Socialapp</h3>
                    <span className="logindesc">Connect with friends and the world around you on Socialapp.</span>

                </div>
                <div className="loginright">

                    <div className="loginBox">
                        <input placeholder="Email" className="logininput" />
                        <input placeholder="Password" className="logininput" />
                        <button className="loginbutton">Log In</button>
                        <span className="loginForgot">Forgot Password</span>
                        <button className="loginregisterbutton">Create a new Account</button>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Login
