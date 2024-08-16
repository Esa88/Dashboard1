
// import React from 'react';
import React, { useState } from 'react';
import Dialog from './components/Dialog';
import styled from 'styled-components';

import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import './App.css';


// App.js


const AddButton = styled.button`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
  
  span {
    margin-left: 8px;
  }
`;

const App = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <div>
      {/* <AddButton onClick={openDialog}>
        <span>+</span>Add Widget
      </AddButton> */}
      <Navbar />
      <Dashboard />

      {isDialogOpen && <Dialog onClose={closeDialog} />}
    </div>
  );
};

export default App;


// const App = () => {
//   return (
//     <div>
      
//       {/* <AddWidgetDialog /> */}
//     </div>
//   );
// };

// export default App;



// import React from "react";
// import Navbar from "./components/Navbar";
// import { Routes, Route } from "react-router-dom";

// const Home = () => {
//   return (
//     <>
//       <Navbar />
//       <section className="hero-section">
//         <p>Subscribe to </p>
//         <h1>Thapa Technical Home Page</h1>
//       </section>
//     </>
//   );
// };

// const About = () => {
//   return (
//     <>
//       <Navbar />
//       <section className="hero-section">
//         <p>Welcome to </p>
//         <h1>Thapa Technical About Page</h1>
//       </section>
//     </>
//   );
// };

// const Service = () => {
//   return (
//     <>
//       <Navbar />
//       <section className="hero-section">
//         <p>Welcome to </p>
//         <h1>Thapa Technical Service Page</h1>
//       </section>
//     </>
//   );
// };

// const Contact = () => {
//   return (
//     <>
//       <Navbar />
//       <section className="hero-section">
//         <p>Welcome to </p>
//         <h1>Thapa Technical Contact Page</h1>
//       </section>
//     </>
//   );
// };

// const App = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/about" element={<About />} />
//       <Route path="/service" element={<Service />} />
//       <Route path="/contact" element={<Contact />} />
//     </Routes>
//   );
// };

// export default App;
