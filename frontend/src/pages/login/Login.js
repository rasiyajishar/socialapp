import { useContext,  useRef } from "react"
import "./login.css"
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext"
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';

import axios from "axios"

function Login() {
    const email = useRef();
    const password = useRef()
    const { user, isFetching, error, dispatch } = useContext(AuthContext)

    const navigate = useNavigate();
   
    const responseGoogle = async (response) => {
        try {
            const tokenId = response.credential;
            const res = await axios.post('http://localhost:8800/api/auth/googleLogin', { tokenId });
            console.log(res.data);
            navigate("/home");
        } catch (error) {
            console.error('Google login error:', error);
        }
    };
    




    

    const handleClick = (e) => {
        e.preventDefault();
        loginCall(
          { email: email.current.value, password: password.current.value },
          dispatch
        );
         navigate("/home")
      };
    console.log(user)

    
    const handlenewaccount=()=>{
        navigate("/")
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
                        <input placeholder="Email" type="email" required className="logininput" ref={email} />
                        <input placeholder="Password" type="password" required minLength="6" className="logininput" ref={password} />
                        <button className="loginbutton">{isFetching ? "loading" : "Log In"}</button>
                        <span className="loginForgot">Forgot Password</span>
                        <button className="loginregisterbutton" onClick={handlenewaccount}>Create a new Account</button>
                      
                    </form>
{/*                    
                     <GoogleLogin
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/> */}

<GoogleLogin
                onSuccess={responseGoogle}
                onError={() => {
                    console.log('Login Failed');
                }}
            />



                </div>

            </div>
        </div>
    )
}

export default Login


// import { useContext, useRef, useState } from "react";
// import "./login.css";
// import { loginCall } from "../../apiCalls";
// import { AuthContext } from "../../context/AuthContext";

// function Login() {
//     const emailRef = useRef();
//     const passwordRef = useRef();
//     const { user, isFetching, error, dispatch } = useContext(AuthContext);
//     const [loginError, setLoginError] = useState("");

//     const handleClick = async (e) => {
//         e.preventDefault();
//         const email = emailRef.current.value;
//         const password = passwordRef.current.value;
        
//         try {
//             await loginCall({ email, password }, dispatch);
//             // Optionally, you can redirect the user to another page upon successful login
//         } catch (error) {
//             setLoginError("Invalid email or password.");
//             console.error("Login Error:", error);
//         }
//     };
// console.log(user)
//     return (
//         <div className="login">
//             <div className="loginwrapper">
//                 <div className="loginleft">
//                     <h3 className="loginlogo">Socialapp</h3>
//                     <span className="logindesc">Connect with friends and the world around you on Socialapp.</span>
//                 </div>
//                 <div className="loginright">
//                     <form className="loginBox" onSubmit={handleClick}>
//                         <input placeholder="Email" type="email" required className="logininput" ref={emailRef} />
//                         <input placeholder="Password" type="password" required minLength="6" className="logininput" ref={passwordRef} />
//                         <button className="loginbutton" disabled={isFetching}>{isFetching ? "Loading..." : "Log In"}</button>
//                         {loginError && <span className="loginError">{loginError}</span>}
//                         <span className="loginForgot">Forgot Password</span>
//                         <button className="loginregisterbutton">Create a new Account</button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Login;

