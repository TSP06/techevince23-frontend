import React from "react";
import { useState } from "react";
import axios from "axios";
import { BACKEND_ROUTES } from "../config/urls";

const LogoutPopup = ({ showModal, setShowModal, clearCookie }) => {
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleLogout = async () => {
    // Add code to handle logout
    await axios.get(BACKEND_ROUTES.logout, { withCredentials: true });
    clearCookie("connect.sid");
    handleClose();
    window.location.href = window.location.origin;
  };

  return (
    <>
      {showModal && (
        <div className='fixed z-10 inset-0 overflow-y-auto'>
          <div className='flex items-center justify-center min-h-screen'>
            <div className='bg-white rounded-lg p-8'>
              <div className='mb-4'>
                <h1 className='font-bold text-xl'>Logout Confirmation</h1>
                <p className='text-gray-500'>
                  Are you sure you want to log out?
                </p>
              </div>
              <div className='flex justify-end'>
                <button
                  className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2'
                  onClick={handleClose}
                >
                  Cancel
                </button>
                <button
                  className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LogoutPopup;
