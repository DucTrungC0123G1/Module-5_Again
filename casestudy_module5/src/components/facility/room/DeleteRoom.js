import {toast} from "react-toastify";
import React from "react";
import {removeRoom} from "../../../services/facility/room_service";

export function DeleteRoom({isModalShow, selectedRoom, closeModal}) {
    // const {isModalShow, selectedCustomer, closeModal} = props
    const handleDelete = async (rooms) => {
        const rs = await removeRoom(rooms.id);
        if (rs.status === 200) {
            closeModal();
            toast("Delete Success")
        }
    }

    return (
        isModalShow && (
            <>
                <div className="modal" tabIndex="-1" style={{display: 'block'}}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Modal title</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close" onClick={closeModal}/>
                            </div>
                            <div className="modal-body">
                                <p>Do you want to delete: <b> {selectedRoom.name}</b></p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"
                                        onClick={closeModal}>Close
                                </button>
                                <button type="button" className="btn btn-danger"
                                        onClick={() => handleDelete(selectedRoom)}>Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        ))
}

