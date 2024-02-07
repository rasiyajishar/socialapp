import axios from "axios";

// export const loginCall = async (userCredential, dispatch) => {
//     dispatch({ type: "LOGIN_START" });
//     try {
      
//         const res = await axios.post("http://localhost:8800/api/auth/login", userCredential);

//         console.log(userCredential);

//         dispatch({ type: "LOGIN_SUCCESS", payload: res.data });

//     } catch (error) {
//         dispatch({ type: "LOGIN_FAILURE", payload: error });
//     }
// };


export const loginCall = async (userCredential, dispatch) => {
    dispatch({ type: "LOGIN_START" });
    try {
        const res = await axios.post("http://localhost:8800/api/auth/login", userCredential);
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (error) {
        // Log the error for debugging
        console.error("Login Error:", error);
        // Dispatch a login failure action with the error payload
        dispatch({ type: "LOGIN_FAILURE", payload: error });
    }
};
