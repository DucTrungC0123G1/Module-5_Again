import React from "react";
import {Link} from "react-router-dom";

export function ListCustomer() {
    return (
        <>
            <div style={{minHeight: "28rem", marginTop: "5rem"}}>
                <h1 style={{textAlign: "center"}}>Danh sách khách hàng</h1>
                <Link to="/customer-add" className="btn btn-outline-success"
                      style={{float: "right", marginRight: "2rem"}}>Thêm mới</Link>
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
                    <tbody>
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
                            <Link to="/customer-edit" className="btn btn-outline-primary border border-dark">Sửa</Link>
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
                            <Link to="/customer-edit" className="btn btn-outline-primary border border-dark">Sửa</Link>
                        </td>
                        <td>
                            <a href="#" className="btn btn-outline-danger btn-square border-dark" data-bs-toggle="modal"
                               data-bs-target="#staticBackdrop1">
                                Xóa
                            </a>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </>
    )

}