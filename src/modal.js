import React from "react";

const Modal = ({ adding, closeing }) => {
    return (
        <div className="modal">
            <h2>Are you Sure</h2>
            <div className="modal-body">
                <span onClick={adding}>Yes</span>
                <span onClick={ closeing }>No</span>
            </div>
        </div>
    )
}
export default Modal;