import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {getCustomerType} from "../../services/customers-type/customerType_service";
import {useNavigate} from "react-router";
import {createCustomer} from "../../services/customers/customer_service";
import {toast} from "react-toastify";
import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";

export function AddCustomer() {
    const [typeCustomer, setTypeCustomer] = useState([]);
    const navigate = useNavigate()

    const loadTypeCustomer = async () => {
        const res = await getCustomerType();
        setTypeCustomer(res);
    }
    const addCustomer = async (data) => {
        const rs = {...data, customerType: JSON.parse(data.customerType)}
        const res = await createCustomer(rs)
        if (res.status === 201) {
            toast.success("Thêm Mới Thành Công")
            navigate("/customers-list")
        } else {
            toast.error("Thêm Mới Không Thành Công")
        }
    }

    useEffect(() => {
        loadTypeCustomer();
    }, [])
    const initValue = {
        name: "",
        dob: "",
        gender: "",
        identity: "",
        phone: "",
        email: "",
        customerType: `${JSON.stringify({
            id: 5,
            name: "Member"
        })}`,
        location: ""
    }
    const currentDay = new Date();
    const overDay = (currentDay.getFullYear() - 18 + "-" + (currentDay.getMonth() + 1) + "-" + currentDay.getDate());
    const validateObject = {
        name: Yup.string()
            .required("Không Được Để Trống")
            .matches(/^(?:[A-Z][a-z]*\s?)+$/, "Tên Không Được Chứa Số, Và các kí tự đầu tiên của mỗi từ phải viết hoa"),
        dob: Yup.date()
            .required("Không Được Để Trống")
            .max(overDay, "Không Đươc Dưới 18 Tuổi"),
        gender: Yup.string()
            .required("Không Được Để Trống"),
        identity: Yup.string()
            .required("Không Được Để Trống")
            .matches(/^[0-9]{9}$|^[0-9]{12}$/, "Số CMND phải đúng định dạng XXXXXXXXX hoặc XXXXXXXXXXXX (X là số 0-9)."),
        phone: Yup.string()
            .required("Không ĐƯợc Để Trống")
            .matches(/^84|0[1-9]+[0-9]{8}$/, "Số điện thoại phải đúng định dạng 090xxxxxxx hoặc 091xxxxxxx hoặc (84)+90xxxxxxx hoặc (84)+91xxxxxxx."),
        email: Yup.string()
            .required("Không Được Để Trống")
            .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, "Email phải đúng định dạng abc@xxx.com "),
        customerType: Yup.string()
            .required("Không Được Để Trống"),
        location: Yup.date()
            .required("Không Được Để Trống"),
    }


    return (
        <>
            <Formik initialValues={initValue}
                    validationSchema={Yup.object(validateObject)}
                    onSubmit={(values) => {
                        addCustomer(values)
                    }}
            >

                <div className="container col-6">
                    <div style={{textAlign: "center"}}>
                        <h1>Thêm mới khách hàng</h1>
                    </div>
                    <div className="container px-5 my-5">
                        <Form id="contactForm">
                            <div className="mb-3">
                                <label className="form-label" htmlFor="name">Họ tên</label>
                                <ErrorMessage style={{fontSize: '0.8rem', color: 'red', marginLeft: '5px'}} name="name"
                                              className="text-danger" component="span"/>
                                <Field className="form-control" name="name" id="name" type="text" placeholder="Họ tên"
                                       data-sb-validations="required"/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="dob">Ngày sinh</label>
                                <Field className="form-control" name="dob" id="dob" type="date" placeholder="Ngày sinh"
                                       data-sb-validations="required"/>
                                <ErrorMessage style={{fontSize: '0.8rem', color: 'red', marginLeft: '5px'}} name="dob"
                                              className="text-danger" component="span"/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label d-block">Giới tính</label>
                                <div className="form-check form-check-inline">
                                    <Field className="form-check-input"  value="Nam" name="gender" id="gender" type="radio" data-sb-validations=""/>
                                    <label className="form-check-label" htmlFor="gender">Nam</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <Field className="form-check-input" value="Nữ" id="gender" type="radio" name="gender" data-sb-validations=""/>
                                    <label className="form-check-label" htmlFor="gender">Nữ</label>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="identity">Số chứng minh nhân dân</label>
                                <Field className="form-control" name="identity" id="identity" type="text"
                                       placeholder="Số chứng minh nhân dân"
                                       data-sb-validations="required"/>
                                <ErrorMessage style={{fontSize: '0.8rem', color: 'red', marginLeft: '5px'}}
                                              name="identity" className="text-danger" component="span"/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="phone">Số điện thoại</label>
                                <Field className="form-control" name="phone" id="phone" type="text" placeholder="Số điện thoại"
                                       data-sb-validations="required"/>
                                <ErrorMessage style={{fontSize: '0.8rem', color: 'red', marginLeft: '5px'}} name="phone"
                                              className="text-danger" component="span"/>

                            </div>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="email">Email</label>
                                <Field className="form-control" name="email" id="email" type="text" placeholder="Email"
                                       data-sb-validations="required"/>
                                <ErrorMessage style={{fontSize: '0.8rem', color: 'red', marginLeft: '5px'}} name="email"
                                              className="text-danger" component="span"/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="customerType">Loại khách</label>
                                <Field as="select" className="form-select" name="customerType" id="customerType" aria-label="Loại khách">
                                    {typeCustomer.map((type) => (
                                            <option key={type.id} value={JSON.stringify(type)}>{type.name}</option>
                                        )
                                    )}
                                </Field>
                            </div>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="location">Địa chỉ</label>
                                <Field className="form-control" name="location" id="location" type="text" placeholder="Địa chỉ"
                                       data-sb-validations="required"/>
                                <ErrorMessage style={{fontSize: '0.8rem', color: 'red', marginLeft: '5px'}}
                                              name="location" className="text-danger" component="span"/>
                            </div>
                            <div className="d-flex justify-content-center mt-2">
                                <button className="btn btn-primary" type="submit">Submit</button>
                                <div>
                                    <Link to={"/customers-list"}>
                                        <button className="btn btn-warning">Cancel</button>
                                    </Link>
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
            </Formik>
        </>
    )

}