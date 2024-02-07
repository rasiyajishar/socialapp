// // App.js
// import React, { useContext } from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import Home from './pages/home/Home';
// import Profile from './pages/profile/Profile';
// import Login from './pages/login/Login';
// import Register from './pages/register/Register';
// import { AuthContext } from './context/AuthContext';

// function App() {
//   const { user } = useContext(AuthContext);

//   return (
//     <Routes>
//       <Route
//         exact
//         path="/"
//         element={user ? <Navigate to="/home" /> : <Register />}
//       />
//       <Route
//         path="/login"
//         element={user ? <Navigate to="/" /> : <Login />}
//       />
//       <Route
//         path="/register"
//         element={user ? <Navigate to="/" /> : <Register />}
//       />
//       <Route path="/home" element={<Home />} />
//       <Route path="/profile/:username" element={<Profile />} />
//     </Routes>
//   );
// }

// export default App;


// App.js
import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Login from './pages/login/Login';
import Register from './pages/register/Register';


function App() {
  

  return (
    <Routes>
      <Route
        
        path="/"
        element={<Register />} />
      
      <Route
        path="/login"
        element={<Login />}
      />
      <Route
        path="/home"
        element={<Home />}
      />
     
      <Route path="/profile/:username" element={<Profile />} />
    </Routes>
  );
}

export default App;
