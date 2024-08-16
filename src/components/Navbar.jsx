
// Navbar.js
import React from 'react';
import styled from 'styled-components';
import { AiOutlineSearch, AiOutlineBell,AiOutlineUser } from 'react-icons/ai';
import { MdArrowForward } from 'react-icons/md';






function Navbar() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 20px', backgroundColor: '#f8f9fa', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
      
      <div style={{ display: 'flex', gap: '10px', fontSize: '14px', color: '#6c757d' }}>
        <div  style={{color:'blue'}}  className="nav-item">Home</div>
        <div className="nav-item">Dashboard V2</div>
      </div>
      
     
       
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
      <div className="search-bar">
      <input
        type="text"
        placeholder="Search anything..."
        style={{ padding: '5px 10px', border: '1px solid #ced4da', borderRadius: '4px', fontSize: '14px', outline: 'none' }}
      /><AiOutlineSearch size={24}  className="icon" />
      </div>
        <AiOutlineBell size={24}  className="icon" />

        <div style={{
          width: '32px',
          height: '32px',
          backgroundColor:"grey",
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer'
        }}>
          <AiOutlineUser size={20}  className="icon" />
        </div>
       
      </div>
      
    </div>
  );
}

export default Navbar;

