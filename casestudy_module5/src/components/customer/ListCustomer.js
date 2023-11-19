import React from "react";

export function ListCustomer() {
    return (
        <>
            <div style="min-height: 28rem;margin-top: 5rem;">
                <h1 style="text-align: center;">Danh sách khách hàng</h1>
                <a href="#" className="btn btn-outline-success" style="float: right;margin-right: 2rem;">Thêm mới</a>
                <table className="table table-striped table-hover mt-2">
                    <thead>
                    <th>STT</th>
                    <th>Họ và tên</th>
                    <th>Ngày sinh</th>
                    <th>Giới tính</th>
                    <th>Số CMND</th>
                    <th>Số điện thoại</th>
                    <th>Email</th>
                    <th>Loại khách</th>
                    <th>Địa chỉ</th>
                    <th colSpan="2">CHỨC NĂNG</th>
                    </thead>
                    <tr>
                        <td>1</td>
                        <td>Nguyễn Đức Trung</td>
                        <td>11-4-1993</td>
                        <td>Nam</td>
                        <td>001201011357</td>
                        <td>0961297922</td>
                        <td>trungnguyen@gmail.com@gmail.com</td>
                        <td>Diamond</td>
                        <td>Đà Nẵng</td>
                        <td>
                            <a className="btn btn-outline-primary border border-dark" href="#">Sửa</a>
                        </td>
                        <td>
                            <a href="#" className="btn btn-outline-danger btn-square border-dark" data-bs-toggle="modal"
                               data-bs-target="#staticBackdrop1">
                                Xóa
                            </a>
                        </td>
                    </tr>

                    <tr>
                        <td>1</td>
                        <td>Nguyễn Đức Trung</td>
                        <td>11-4-1993</td>
                        <td>Nam</td>
                        <td>001201011357</td>
                        <td>0961297922</td>
                        <td>trungnguyen@gmail.com@gmail.com</td>
                        <td>Diamond</td>
                        <td>Đà Nẵng</td>
                        <td>
                            <a className="btn btn-outline-primary border border-dark" href="#">Sửa</a>
                        </td>
                        <td>
                            <a href="#" className="btn btn-outline-danger btn-square border-dark" data-bs-toggle="modal"
                               data-bs-target="#staticBackdrop1">
                                Xóa
                            </a>
                        </td>
                    </tr>
                </table>

                <!--modal-delete-->
                <div className="modal fade" id="staticBackdrop1" data-bs-backdrop="static" data-bs-keyboard="false"
                     tabIndex="-1"
                     aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog">
                        <div className="modal-content">
                            <form>
                                <div className="modal-header" style="background-color: #FFD333">
                                    <h5 className="modal-title fs-5" id="staticBackdropLabel">Bạn chắc chắn muốn
                                        xóa</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"
    aria-label="Close"/>
                                </div>
                                <div className="modal-body">
                                    <input id="customerId" name="id" type="hidden"/>
                                        <span>Khách hàng tên </span>
                                        <span id="customerName" name="deleteName"></span>
                                </div>
                                <div className="modal-footer">
                                    <button type="submit" className="btn btn-danger">Xóa</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}