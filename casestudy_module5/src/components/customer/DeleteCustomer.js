import {toast} from "react-toastify";
import React from "react";
import {deleteCustomer} from "../../services/customers/customer_service";

export function CustomerDelete({isModalShow, selectedCustomer, closeModal}) {
    // const {isModalShow, selectedCustomer, closeModal} = props
    const handleDelete = async (customer) => {
        const rs = await deleteCustomer(customer.id);
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
                                        aria-label="Close" onClick={closeModal}></button>
                            </div>
                            <div className="modal-body">
                                <p>Do you want to delete: <b> {selectedCustomer.name}</b></p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"
                                        onClick={closeModal}>Close
                                </button>
                                <button type="button" className="btn btn-danger"
                                        onClick={() => handleDelete(selectedCustomer)}>Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        ))
}

export default CustomerDelete;