import React, { useState } from "react";
import Video from "./video";

const Modal = ({ show, onClose }) => {
  const modalClasses = `fixed inset-0 z-10 flex items-center justify-center ${
    show ? "" : "hidden"
  }`;

  const backdropClasses = `fixed inset-0 bg-black opacity-50 ${
    show ? "" : "hidden"
  }`;

  return (
    <>
      <div className={backdropClasses} onClick={onClose} />
      <div className={modalClasses}>
        <div className="bg-white rounded-lg p-4">
          <h2 className="text-lg font-medium mb-4">Modal Title</h2>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded mr-2"
            onClick={onClose}
          >
            Cerrar Modal
          </button>
         </div>
      </div>
    </>
  );
};

const ExampleModal = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const appClasses = `flex items-center justify-center ${
    showModal ? "overflow-hidden" : ""
  }`;

  return (
    <div className={appClasses}>
        
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleOpenModal}>
        boto
      </button>
      <Modal show={showModal} onClose={handleCloseModal} />
    </div>
  );
};

export default ExampleModal;
