import React, { useRef } from 'react';

const Modal = ({ toggleShowModal, valueNumber, firstNumber, secondNumber, fibIndex }) => {

  const start = firstNumber.current.value;
  const end = secondNumber.current.value;
  const iteration = fibIndex + 1;

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">
            {valueNumber}
          </h4>
        </div>
        <div className="modal-body">
          The number {valueNumber} is the {iteration} iteration
          of the custom fibonacci sequence from: {start} and {end}
        </div>
        <div className="modal-footer">
          <button onClick={toggleShowModal} className="btn-modal">Ok!</button>
        </div>
      </div>
    </div>
  )
  
}


export default Modal;