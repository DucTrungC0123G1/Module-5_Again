import {useDispatch} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import * as Yup from "yup";
import {createNewPost} from "../../redux/middleware/PostMiddleware";
import {toast} from "react-toastify";
import React from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";

export function PostCreate() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const initValue = {
        title: "",
        thumbnail_url: "",
        slug: "",
        category: "",
    }

    const validateObject = {
        title: Yup.string()
            .required("Title do not empty"),
        thumbnail_url: Yup.string()
            .required("URL do not empty"),
        slug: Yup.string()
            .required("Slug do not empty"),
        category: Yup.string()
            .required("Category do not empty"),
    }
    const createPost = async (value) => {
        dispatch(createNewPost(value));
        toast.success("Add new Success")
        navigate("/post-list")
    }
    return (
        <>
            <div className="container">
                <h1> Create Post</h1>
                <Formik initialValues={initValue}
                        onSubmit={(values) => {
                            createPost(values)
                        }}
                        validationSchema={Yup.object(validateObject)}
                >
                    <Form>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Tittle</label>
                            <ErrorMessage style={{fontSize: '0.8rem', color: 'red',marginLeft:'5px'}} name="title" component="span"
                                          classname="text-danger"/>
                            <Field type="text" className="form-control" id="title" name="title"/>

                        </div>
                        <div className="mb-3">
                            <label htmlFor="thumbnail_url" className="form-label"> Thumbnail URL</label>
                            <Field as="textarea" className="form-control" name="thumbnail_url" id="thumbnail_url"/>
                            <ErrorMessage style={{fontSize: '0.8rem', color: 'red',marginLeft:'5px'}} name="thumbnail_url"
                                          component="span" classname="text-danger"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="slug" className="form-label">Slug</label>
                            <Field type="text" className="form-control" name="slug" id="slug"/>
                            <ErrorMessage style={{fontSize: '0.8rem', color: 'red',marginLeft:'5px'}} name="slug" component="span"
                                          classname="err-mess"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="category" className="form-label">Category</label>
                            <Field type="text" className="form-control" name="category" id="category"/>
                            <ErrorMessage style={{fontSize: '0.8rem', color: 'red',marginLeft:'5px'}} name="category" component="span"
                                          classname="err-mess"/>
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                        <Link className="btn btn-warning" to="/post-list"> Cancel</Link>
                    </Form>
                </Formik>
            </div>

        </>
    )
}