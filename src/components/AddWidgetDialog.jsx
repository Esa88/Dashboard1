
import React, { useState } from 'react';
import styled from 'styled-components';


const AddWidgetDialog = ({ isOpen, onClose, onAdd }) => {
  const [selectedWidgets, setSelectedWidgets] = useState(new Set());




  const widgets = [
    { id: 1, name: "Widget 1" },
    { id: 2, name: "Widget 2" },
    // Add more widgets as needed
  ];



  // Dialog.js
//import React from 'react';

const Overlay = styled.div`
  position:left;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  text-align: center;
`;

const CloseButton = styled.button`
  margin-top: 10px;
`;

const Dialog = ({ onClose }) => {
  return (
    <Overlay>
      <ModalContainer>
        <h2>Add New Widget</h2>
        {/* Add your form or widget creation logic here */}
        <CloseButton onClick={onClose}>Close</CloseButton>
      </ModalContainer>
    </Overlay>
  );
};

// export default Dialog;


  const handleSelection = (id) => {
    const newSelection = new Set(selectedWidgets);
    newSelection.has(id) ? newSelection.delete(id) : newSelection.add(id);
    setSelectedWidgets(newSelection);
  };

  const handleAddWidgets = () => {
    onAdd(Array.from(selectedWidgets));
    onClose();
  };

  return (
    isOpen && (
      <div className="dialog">
        <div className="dialog-content">
          <div className='head'>
          <h2 className='heading'>Add Widget</h2>
            <button className="close-button" onClick={onClose}> X </button>
          </div>
         
         
          <p className="p"> Personalise your dashboard by adding the following widget:</p>
          <div className="tab-navigation">
        <span className="active-tab">CSPM</span>
        <span>CWPP</span>
        <span>Image</span>
        <span>Ticket</span>
      </div>

          {widgets.map(widget => (
            <div key={widget.id}>
              <input
                type="checkbox"
                checked={selectedWidgets.has(widget.id)}
                onChange={() => handleSelection(widget.id)}
              />
              <label>{widget.name}</label>
            </div>
          ))}
          <div className="action-buttons">
            <button  className=" cancel-button"onClick={onClose}>Cancel</button>
            <button className="confirm-button"onClick={handleAddWidgets}>Confirm</button>
          </div>
        </div>
      </div>
    )
  );
};

export default AddWidgetDialog;
