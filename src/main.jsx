
import React from 'react'; 
import ReactDOM from 'react-dom/client'; 
import App from './App.jsx'; 

// This is the entry point of my React application.
// I'm creating a root for my React app and telling it where to attach itself in the HTML document (the div with id 'root').
ReactDOM.createRoot(document.getElementById('root')).render(
  // I'm wrapping my App component with React.StrictMode.
  // This helps me find potential problems in my application during development by running extra checks and warnings.
  <React.StrictMode>
    <App /> 
  </React.StrictMode>,
);
