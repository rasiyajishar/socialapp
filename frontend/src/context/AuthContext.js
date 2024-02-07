// import React, { createContext, useReducer } from "react";
// import AuthReducer from "./AuthReducer";
// const INITIAL_STATE = {
//     user: {
//         "_id": "65bb067ff0b3afca39dba1fd",
//         "username": "teena",
//         "password": "$2b$10$vVoZd85hdPh77SFaOyKue.CZfxw7VskilPE4XlnosUcnQJ46pU2wa",
//         "email": "teena@gmail.com",
//         "profilePicture": "",
//         "coverPicture": "",
//         "followers": [],
//         "followings": [1,2,3],
//         "isAdmin": false,
//         "createdAt": "2024-02-01T02:48:31.818Z",
//         "updatedAt": "2024-02-01T05:13:27.338Z",
//         "__v": 0,
//         "desc": "hi aaaaaaallllllllllllll"
//     },

//     // user:null,
//     isFetching: false,
//     error: false
// };

// export const AuthContext = createContext(INITIAL_STATE);


// export const AuthContextProvider = ({ children }) => {
//     const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

//     return (
//         <AuthContext.Provider value={{
//             user: state.user,
//             isFetching: state.isFetching,
//             error: state.error,
//             dispatch
//         }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };



import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user:JSON.parse(localStorage.getItem("user")) || null,
  isFetching: false,
  error: false,
};


export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  
  useEffect(()=>{
    localStorage.setItem("user", JSON.stringify(state.user))
  },[state.user])
  
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};