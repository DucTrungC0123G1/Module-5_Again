import {useNavigate} from "react-router";
import React, {useEffect} from "react";
import {toast} from "react-toastify";
import * as Yup from 'yup';
import {ErrorMessage, Field, Form, Formik} from "formik";
import {Link} from "react-router-dom";
import {createContract} from "../../services/contract/contractService";

export function CreateContract() {
    const navigate = useNavigate();
    useEffect(() => {

    }, [])
    const addContract = async (data) => {
        const rs = await createContract(data);
        if (rs.status === 201) {
            navigate("/contracts");
            toast.success("Add New Success")
        } else {
            toast("Add New Error")
        }
    }

    const initValue = {
        code: "",
        dateStart: "",
        dateEnd: "",
        depositMoney: "",
        totalMoney: "",
    }
    const currentDay = new Date();
    const validateObject = {
        code: Yup.string()
            .required("Không để trống"),
        dateStart: Yup.date()
            .required("Không để trống")
            .min(currentDay,"Không được sau ngày hiện tại"),
        dateEnd: Yup.date()
            .required("Không để trống")
            .min(Yup.ref("dateStart"),"Không được sau ngày bắt đầu")
            .test("dateEnd", "Ngày kết thúc không được sau ngày bắt đầu", function (value) {
                const { dateStart } = this.parent;
                return  value > dateStart;
            }),
        depositMoney: Yup.string()
            .required("Không để trống")
            .min(1, "Tiền phải lớn hơn 0"),
        totalMoney: Yup.string()
            .required("Không để trống")
            .min(1, "Tiền phải lớn hơn 0"),
    }
    return (
        <>
            <h1 className="title" style={{textAlign:"center"}}> Add Contract</h1>
            <Formik initialValues={initValue}
                    validationSchema={Yup.object(validateObject)}
                    onSubmit={(values) =>{
                        addContract(values)

                    }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-10">
                            <Form>
                                <div className="form-group mt-2">
                                    <h6>
                                        <label htmlFor="Code">Code Contract</label>
                                    </h6>
                                    <Field className="form-control mt-2" id="code" name="code" type="text"/>
                                    <ErrorMessage name="code" className="text-danger" component="span"/>
                                </div>
                                <div className="form-group mt-2">
                                    <h6>
                                        <label htmlFor="dateStart">Date Start</label>
                                    </h6>
                                    <Field className="form-control mt-2" id="dateStart" name="dateStart" type="date"/>
                                    <ErrorMessage name="dateStart" className="text-danger" component="span"/>
                                </div>
                                <div className="form-group mt-2">
                                    <h6>
                                        <label htmlFor="dateEnd">Date End</label>
                                    </h6>
                                    <Field className="form-control mt-2" id="dateEnd" name="dateEnd" type="date"/>
                                    <ErrorMessage name="dateEnd" className="text-danger" component="span"/>
                                </div>
                                <div className="form-group mt-2">
                                    <h6>
                                        <label htmlFor="depositMoney">Deposit Money</label>
                                    </h6>
                                    <Field className="form-control mt-2" id="depositMoney" name="depositMoney" type="text"/>
                                    <ErrorMessage name="depositMoney" className="text-danger" component="span"/>
                                </div>
                                <div className="form-group mt-2">
                                    <h6>
                                        <label htmlFor="totalMoney">Total Money</label>
                                    </h6>
                                    <Field className="form-control mt-2" id="totalMoney" name="totalMoney" type="text"/>
                                    <ErrorMessage name="totalMoney" className="text-danger" component="span"/>
                                </div>
                                <div className="d-flex justify-content-center mt-2">
                                    <button className="btn btn-primary" type="submit">Submit</button>
                                    <div>
                                        <Link to={"/contract-list"}>
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
export default CreateContract;