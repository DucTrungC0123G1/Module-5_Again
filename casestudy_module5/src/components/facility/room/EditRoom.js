import {Link, useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {getListTypeRental} from "../../../services/type-rental/type_rental";
import { getRoomById, updateRoom} from "../../../services/facility/room_service";
import {toast} from "react-toastify";
import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";

export function EditRoom() {
    const navigate = useNavigate();
    const [room, setRoom] = useState(null);
    const [typeRent, setTypeRent] = useState([]);
    const {id} = useParams();


    const loadTypeRental = async () => {
        const rs = await getListTypeRental();
        setTypeRent(rs);
    }

    const findRoomById = async () => {
        const rs = await getRoomById(id);
        setRoom(rs);
    }

    useEffect(() => {
        loadTypeRental();
        findRoomById();
    }, [id]);

    const editRoom = async (data) => {
        const rs = {...data, typeRental: JSON.parse(data.typeRental), id: id}
        const res = await updateRoom(rs);
        if (res.status === 200) {
            navigate("/facility-room");
            toast.success("Chỉnh Sửa Thành Công");
        } else {
            toast.error("Chỉnh Sửa Lỗi");
        }
    }
    if (!room) {
        return null;
    }

    const initValue = {
        name: room?.name,
        area: room?.area,
        cost: room?.cost,
        capacity: room?.capacity,
        image: room?.image,
        typeRental: JSON.stringify(room?.typeRental),
        description: room?.description,
        standard: room?.standard,
        poolArea: room?.poolArea,
        floor: room?.floor,

    }
    const validateObject = {
        name: Yup.string()
            .required("Không để trống"),
        area: Yup.number()
            .required("Không để trống")
            .min(1, "Diện tích lớn hơn 1"),
        cost: Yup.number()
            .required("Không để trống")
            .min(1000, "Giá lớn hơn 1000"),
        capacity: Yup.number()
            .required("Không để trống")
            .min(1, "Số người lớn hơn 1"),
        image: Yup.string()
            .required("Không để trống"),
        typeRental: Yup.string()
            .required("Không để trống"),
        description: Yup.string()
            .required("Không để trống"),
        standard: Yup.string()
            .required("Không để trống"),
        poolArea: Yup.number()
            .required("Không để trống")
            .min(1, "Diện tích lớn 1"),
        floor: Yup.number()
            .required("Không để trống")
            .min(1, "Số tầng lớn hơn 1"),

    }
    return (
        <>
            <Formik
                initialValues={initValue}
                validationSchema={Yup.object(validateObject)}
                onSubmit={(values) => {
                    console.log("---------------------------------------------------")
                    console.log(values);
                    editRoom(values)
                }}
            >
                <div className="container px-5 my-5">
                    <Form>
                        <div className="mb-3">
                            <label htmlFor="name">Tên Room</label>
                            <ErrorMessage style={{fontSize: '0.8rem', color: 'red', marginLeft: '5px'}} name="name"
                                          className="text-danger" component="span"/>
                            <Field className="form-control" name="name" id="name" type="text" placeholder="Tên Room"
                                   data-sb-validations="required"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="area">Diện Tích</label>
                            <ErrorMessage style={{fontSize: '0.8rem', color: 'red', marginLeft: '5px'}} name="area"
                                          className="text-danger" component="span"/>
                            <Field className="form-control" name="area" id="area" type="text" placeholder="Diện Tích"
                                   data-sb-validations="required"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="cost">Giá</label>
                            <ErrorMessage style={{fontSize: '0.8rem', color: 'red', marginLeft: '5px'}} name="cost"
                                          className="text-danger" component="span"/>
                            <Field className="form-control" name="cost" id="cost" type="text" placeholder="Giá"
                                   data-sb-validations="required"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="capacity">Số Người</label>
                            <ErrorMessage style={{fontSize: '0.8rem', color: 'red', marginLeft: '5px'}} name="capacity"
                                          className="text-danger" component="span"/>
                            <Field className="form-control" name="capacity" id="capacity" type="text"
                                   placeholder="Số Người"
                                   data-sb-validations="required"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="image">Hình Ảnh</label>
                            <ErrorMessage style={{fontSize: '0.8rem', color: 'red', marginLeft: '5px'}} name="image"
                                          className="text-danger" component="span"/>
                            <Field className="form-control" name="image" id="image" type="text" placeholder="Hình Ảnh"
                                   data-sb-validations="required"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="typeRental">Kiểu Thuê</label>
                            <ErrorMessage style={{fontSize: '0.8rem', color: 'red', marginLeft: '5px'}}
                                          name="typeRental"
                                          className="text-danger" component="span"/>
                            <Field as="select" className="form-select" name="typeRental" id="typeRental">
                                <option value="">Chọn</option>
                                {typeRent.map((rent) => (
                                    <option key={rent.id} value={JSON.stringify(rent)}>{rent.name} </option>
                                ))}
                            </Field>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description">Mô tả</label>
                            <ErrorMessage style={{fontSize: '0.8rem', color: 'red', marginLeft: '5px'}}
                                          name="description"
                                          className="text-danger" component="span"/>
                            <Field className="form-control" name="description" id="description" type="text"
                                   placeholder="Mô tả"
                                   data-sb-validations="required"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="standard">Tiêu Chuẩn</label>
                            <ErrorMessage style={{fontSize: '0.8rem', color: 'red', marginLeft: '5px'}} name="standard"
                                          className="text-danger" component="span"/>
                            <Field className="form-control" name="standard" id="standard" type="text"
                                   placeholder="Tiêu Chuẩn"
                                   data-sb-validations="required"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="poolArea">Hồ Bơi</label>
                            <ErrorMessage style={{fontSize: '0.8rem', color: 'red', marginLeft: '5px'}} name="poolArea"
                                          className="text-danger" component="span"/>
                            <Field className="form-control" name="poolArea" id="poolArea" type="text"
                                   placeholder="Hồ Bơi"
                                   data-sb-validations="required"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="floor">Số Tầng</label>
                            <ErrorMessage style={{fontSize: '0.8rem', color: 'red', marginLeft: '5px'}} name="floor"
                                          className="text-danger" component="span"/>
                            <Field className="form-control" name="floor" id="floor" type="text" placeholder="Hồ Bơi"
                                   data-sb-validations="required"/>
                        </div>
                        <div className="d-flex justify-content-center mt-2">
                            <button className="btn btn-primary" type="submit">Submit</button>
                            <div>
                                <Link to={"/facility-room"}>
                                    <button className="btn btn-warning">Cancel</button>
                                </Link>
                            </div>
                        </div>
                    </Form>
                </div>
            </Formik>

        </>

    )
}