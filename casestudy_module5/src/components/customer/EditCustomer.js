import React from "react";
import {Link} from "react-router-dom";

export function EditCustomer() {
    return (
        <>
            <div style={{textAlign: "center"}}>
                <h1>Sửa thông tin khách hàng</h1>
            </div>
            <div className="container px-5 my-5">
                <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                    <div className="mb-3">
                        <label className="form-label" htmlFor="name">Họ tên</label>
                        <input className="form-control" id="name" type="text" placeholder="Sửa Họ tên"
                               data-sb-validations="required"/>
                        <div className="invalid-feedback" data-sb-feedback="name:required">Họ tên is required.</div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="date">Ngày sinh</label>
                        <input className="form-control" id="date" type="date" placeholder="Sủa Ngày sinh"
                               data-sb-validations="required"/>
                        <div className="invalid-feedback" data-sb-feedback="datevb :required">Ngày sinh is required.
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label d-block">Giới tính</label>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" id="nam" type="radio" name="newField17"
                                   data-sb-validations=""/>
                            <label className="form-check-label" htmlFor="nam">Nam</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" id="nữ" type="radio" name="newField17"
                                   data-sb-validations=""/>
                            <label className="form-check-label" htmlFor="nữ">Nữ</label>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="code">Số chứng minh nhân dân</label>
                        <input className="form-control" id="code" type="number" placeholder="Sủa Số chứng minh nhân dân"
                               data-sb-validations="required"/>
                        <div className="invalid-feedback" data-sb-feedback="code:required">Số chứng minh nhân dân is
                            required.
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="telephone">Số điện thoại</label>
                        <input className="form-control" id="telephone" type="number" placeholder="SửaSố điện thoại"
                               data-sb-validations="required"/>
                        <div className="invalid-feedback" data-sb-feedback="telephone:required">Số điện thoại is
                            required.
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="email">Email</label>
                        <input className="form-control" id="email" type="text" placeholder="Sửa Email"
                               data-sb-validations="required"/>
                        <div className="invalid-feedback" data-sb-feedback="email:required">Email is required.</div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="newField18">Loại khách</label>
                        <select className="form-select" id="newField18" aria-label="New Field 18">
                            <option value="Diamond">Diamond</option>
                            <option value="Platinum">Platinum</option>
                            <option value="Gold">Gold</option>
                            <option value="Silver">Silver</option>
                            <option value="Member">Member</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="address">Địa chỉ</label>
                        <input className="form-control" id="address" type="text" placeholder="Sửa Địa chỉ"
                               data-sb-validations="required"/>
                        <div className="invalid-feedback" data-sb-feedback="address:required">Địa chỉ is required.</div>
                    </div>
                    <div className="d-none" id="submitSuccessMessage">
                        <div className="text-center mb-3">
                            <div className="fw-bolder">Form submission successful!</div>
                            <p>To activate this form, sign up at</p>
                            <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                        </div>
                    </div>
                    <div className="d-none" id="submitErrorMessage">
                        <div className="text-center text-danger mb-3">Error sending message!</div>
                    </div>
                    <div className="d-grid">
                        <button className="btn btn-primary" id="submitButton" type="submit">Submit
                        </button>
                        <Link to="/customers-list" className="btn btn-outline-warning">
                            Cancel
                        </Link>

                    </div>
                </form>
            </div>
        </>
    )

}