// // index.js
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import { BrowserRouter } from 'react-router-dom';
// import { AuthContextProvider } from './context/AuthContext';

// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <AuthContextProvider>
//         <App />
//       </AuthContextProvider>
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from 'react-dom/client'
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider> 
        <App />
      </AuthContextProvider> 
    </BrowserRouter>
  </React.StrictMode>
);

