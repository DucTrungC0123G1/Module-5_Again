import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useNavigate, useParams} from "react-router-dom";
import {getCustomerType} from "../../services/customers-type/customerType_service";
import {editCustomer, getCustomerById} from "../../services/customers/customer_service";
import {toast} from "react-toastify";
import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";

export function EditCustomer() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [customer, setCustomer] = useState(null);
    const [customerType, setCustomerType] = useState([]);

    const loadTypeCustomer = async () => {
        const res = await getCustomerType();
        setCustomerType(res);
    }

    const findById = async () => {
        const rs = await getCustomerById(id)
        setCustomer(rs)
    }


    useEffect(() => {
        loadTypeCustomer()
        findById()
    }, [id])


    const updateCustomer = async (data) => {
        const rs = {...data, customerType: JSON.parse(data.customerType), id: id}
        const res = await editCustomer(rs)
        if (res.status === 200) {
            toast.success("Chỉnh Sửa Thành Công")
            navigate("/customers-list")
        } else {
            toast.error("Chỉnh Sửa Thất Bại")
        }

    }
    if (!customer) {
        return null;
    }

    const initValue = {
        name:customer?.name,
        dob: customer?.dob,
        gender: customer?.gender,
        identity: customer?.identity,
        phone: customer?.phone,
        email: customer?.email,
        customerType:JSON.stringify(customer?.customerType),
        location:customer?.location,
    }
    const validateObject = {
        name: Yup.string()
            .required("name can not empty")
            .matches(/^(?:[A-Z][a-z]*\s?)+$/, "Customer names cannot contain numbers. And the first letters of each word must be capitalized."),
        dob: Yup.string()
            .required("dob can not empty"),
        gender: Yup.string()
            .required("gender can not empty"),
        identity: Yup.string()
            .required("identity can not empty")
            .matches(/^[0-9]{9}$|^[0-9]{12}$/, "identity must be correct the format"),
        phone: Yup.string()
            .required("phone can not empty"),
        email: Yup.string()
            .required("email can not empty")
            .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, "email must be correct the format"),
        customerType: Yup.string()
            .required("type can not empty"),
        location: Yup.string()
            .required("location can not empty")
    }

    return (
        <>
            <h1 className="title" style={{textAlign:"center"}}>Edit Customer</h1>
            <Formik initialValues={initValue}
                    validationSchema={Yup.object(validateObject)}
                    onSubmit={(values) => {
                        console.log("---------------------------------------------------")
                        console.log(values);
                        updateCustomer(values)
                    }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-10">
                            <Form>
                                <div className="form-group mt-2">
                                    <h6>
                                        <label htmlFor="name">Name</label>
                                    </h6>
                                    <Field className="form-control mt-2" id="name" name="name" type="text"/>
                                    <ErrorMessage name="name" className="text-danger" component="span"/>
                                </div>
                                <div className="form-group mt-2">
                                    <h6>
                                        <label htmlFor="dob">Date Of Birth</label>
                                    </h6>
                                    <Field className="form-control mt-2" id="dob" name="dob" type="date"/>
                                    <ErrorMessage name="dob" className="text-danger" component="span"/>
                                </div>
                                <div className="form-group mt-2">
                                    <h6>
                                        <label htmlFor="gender">Gender</label>
                                    </h6>
                                    <Field as="select" className="form-control mt-2" id="gender" name="gender">
                                        <option value={""}>-Option-</option>
                                        <option value={true}>Male</option>
                                        <option value={false}>Female</option>
                                    </Field>
                                    <ErrorMessage name="gender" className="text-danger" component="span"/>
                                </div>
                                <div className="form-group mt-2">
                                    <h6>
                                        <label htmlFor="identity">Identity</label>
                                    </h6>
                                    <Field className="form-control mt-2" id="identity" name="identity" type="text"/>
                                    <ErrorMessage name="identity" className="text-danger" component="span"/>
                                </div>
                                <div className="form-group mt-2">
                                    <h6>
                                        <label htmlFor="phone">Phone</label>
                                    </h6>
                                    <Field className="form-control mt-2" id="phone" name="phone" type="text"/>
                                    <ErrorMessage name="phone" className="text-danger" component="span"/>
                                </div>
                                <div className="form-group mt-2">
                                    <h6>
                                        <label htmlFor="email">Email</label>
                                    </h6>
                                    <Field className="form-control mt-2" id="email" name="email" type="text"/>
                                    <ErrorMessage name="email" className="text-danger" component="span"/>
                                </div>
                                <div className="form-group mt-2">
                                    <h6>
                                        <label htmlFor="customerType">Customer Type</label>
                                    </h6>
                                    <Field as="select" className="form-control mt-2" id="customerType"
                                           name="customerType">
                                        {customerType.map((customerType) => (
                                            <option key={customerType.id}
                                                    value={JSON.stringify(customerType)}>{customerType.name}</option>
                                        ))}
                                    </Field>
                                </div>
                                <div className="form-group mt-2">
                                    <h6>
                                        <label htmlFor="location">Location</label>
                                    </h6>
                                    <Field className="form-control mt-2" id="location" name="location" type="text"/>
                                    <ErrorMessage name="location" className="text-danger" component="span"/>
                                </div>
                                <div className="d-flex justify-content-center mt-2">
                                    <button className="btn btn-primary" type="submit">Submit</button>
                                    <div>
                                        <Link to={"/customers"}>
                                            <button className="btn btn-warning">Cancel</button>
                                        </Link>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </Formik>
        </>
    )

}