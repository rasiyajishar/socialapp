import "./register.css"

function Register() {
    return (
        <div className="login">
            <div className="loginwrapper">
                <div className="loginleft">
                    <h3 className="loginlogo">Socialapp</h3>
                    <span className="logindesc">Connect with friends and the world around you on Socialapp.</span>

                </div>
                <div className="loginright">

                    <div className="loginBox">
                        <input placeholder="Username" className="logininput" />
                        <input placeholder="Email" className="logininput" />
                        <input placeholder="Password" className="logininput" />
                        
                        <input placeholder="Password Again" className="logininput" />
                        <button className="loginbutton">Sign up</button>

                        <button className="loginregisterbutton">Log into Account</button>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Register
