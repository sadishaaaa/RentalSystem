import { useContext } from "react";
import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap"; 
import { AuthContext } from "../assets/context/authcontext";
import "../styles/UserProfile.css";
import { toast } from "react-toastify";

export default function UserProfile() {
  const { currentUser, logout } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  const handleLogout = () => {
    setShowModal(true); // Show the modal when the user clicks "Logout"
  };

  const confirmLogout = () => {
    logout();
    setShowModal(false); // Close the modal after logging out
    // You can add any additional logic you want after logging out
  };

  const cancelLogout = () => {
    setShowModal(false); // Close the modal if the user cancels logout
  };

  return (
    <div className="page-content page-container" id="page-content">
      <div className="padding">
        <div className="row container d-flex justify-content-center mx-auto mt-3">
          <div className="col-xl-8 col-md-12">
            <div className="card user-card-full">
              <div className="row m-l-0 m-r-0">
                <div className="col-sm-4 bg-c-lite-green user-profile">
                  <div className="card-block text-center text-white">
                    <div className="m-b-25">
                      <img
                        src="https://img.icons8.com/bubbles/100/000000/user.png"
                        className="img-radius"
                        alt="User-Profile"
                      />
                    </div>
                    <h4 className="f-w-600">{`${currentUser.customerName} `}</h4>
                    {/* <h6>{currentUser.userRole}</h6> */}
                  </div>
                </div>
                <div className="col-sm-8">
                  <div className="card-block">
                    <h4 className="m-b-20 p-b-5 b-b-default f-w-600">
                      Information
                    </h4>
                    <div className="row">
                      <div className="col-sm-6">
                        <h6 className="m-b-10 f-w-600">Email</h6>
                        <h6 className="text-muted f-w-400">
                          {currentUser.email}
                        </h6>
                      </div>
                      <div className="col-sm-6">
                        <h6 className="m-b-10 f-w-600">Phone</h6>
                        <h6 className="text-muted f-w-400">
                          {currentUser.contact_no}
                        </h6>
                      </div>
                      <div className="col-sm-6">
                        <h6 className="m-b-10 f-w-600">Address</h6>
                        <h6 className="text-muted f-w-400">
                          {currentUser.address}
                        </h6>
                      </div>
                    </div>
                    {/* <h4 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Settings</h4>
                    <div className="col-sm-6">
                      <button className="btn btn-warning" onClick={() => { handleView() }}>Change Password</button>
                    </div> */}
                    {/* <h4 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Documents</h4> */}
                    {/* <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600 text-center">License</h6>
                    <div className='row'>
                      <div className="col-md-12">
                        <form className="row needs-validation">
                          <label className="form-label">Upload License</label>
                          <div class="input-group mb-3">
                            <input type="file" class="form-control" />
                            <div class="input-group-prepend">
                              <button type="submit" class="btn btn-primary">Upload</button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div> */}

                    <div className="row">
                      <div className="col-md-12">
                        <div class="input-group-prepend">
                          <br /> <br />
                  
                          <button type="submit" class="btn btn-primary" onClick={handleLogout}>
                            logout
                          </button>

                          <Modal show={showModal} onHide={cancelLogout}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Logout</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to log out?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={cancelLogout}>
            Cancel
          </Button>
          <Button variant="primary" onClick={confirmLogout}>
            Logout
          </Button>
        </Modal.Footer>
      </Modal>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
