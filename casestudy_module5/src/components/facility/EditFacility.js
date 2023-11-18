import React from "react";

export function EditFacility() {
    return (
        <>
            <form>
                <div className="container px-5 my-5">
                    <h1 style={{textAlign: "center"}}>Sửa thông tin dịch vụ </h1>
                    <div className="mb-3">
                        <label htmlFor="nameService" className="form-label">Tên dịch vụ</label>
                        <input type="text" className="form-control" id="nameService" placeholder="Sửa tên dịch vụ"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="area" className="form-label">Diện tích sử dụng</label>
                        <input type="text" className="form-control" id="area" placeholder="Sửa diện tích"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="price" className="form-label">Chi phí thuê</label>
                        <input type="text" className="form-control" id="price" placeholder="Sửa chi phí thuê"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="numberPeople" className="form-label">Số lượng người tối đa</label>
                        <input type="text" className="form-control" id="numberPeople" placeholder="Sửa số lượng người"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="typeRental" className="form-label">Kiểu thuê</label>
                        <input type="text" className="form-control" id="typeRental" placeholder="Sửa kiểu thuê"/>
                    </div>
                    <div className="d-none" id="submitSuccessMessage">
                        <div className="text-center mb-3">
                            <div className="fw-bolder">Form submission successful!</div>
                            <p>To activate this form, sign up at</p>
                            <a
                                href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                        </div>
                    </div>
                    <div className="d-none" id="submitErrorMessage">
                        <div className="text-center text-danger mb-3">Error sending message!</div>
                    </div>
                    <div className="d-grid">
                        <button className="btn btn-primary btn-lg disabled" id="submitButton" type="submit">Submit
                        </button>
                    </div>
                </div>
            </form>
        </>
    )

}