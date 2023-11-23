import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {getAllPost, removeById} from "../../redux/middleware/PostMiddleware";
import {Link, NavLink} from "react-router-dom";
import {toast} from "react-toastify";

export function PostList() {
    const posts = useSelector(store => store.posts);
    const dispatch = useDispatch();

    console.log(posts)

    useEffect(() => {

        dispatch(getAllPost());
    }, [])

    const deletePost = () => {
        dispatch(removeById(posts.id))
        toast.success("Delete Success");
    }

    if (!posts) {
        return null;
    }
    return (
        <>
            <div className="container">
                <div style={{textAlign: "center"}}>
                    <h1>List Post</h1>
                </div>
                <div>
                    <NavLink to="/post-create">
                        <button className="btn btn-primary"> Add New</button>
                    </NavLink>
                </div>
                <table className="table table-striped table-border">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>TITTLE</th>
                        <th>SLUG</th>
                        <th>CATEGORY</th>
                        <th>THUMBNAIL URL</th>
                        <th>ACTION</th>
                    </tr>
                    </thead>
                    <tbody>
                    {posts.map((item, index) => (
                        <tr key={item.id}>
                            <td>{index}</td>
                            <td>{item.title}</td>
                            <td>{item.slug}</td>
                            <td>{item.category}</td>
                            <td><img style={{height: "100px", width: "150px"}} src={item.thumbnail_url} alt="img"/></td>
                            <td>
                                <button onClick={() => deletePost(item)} type="button" className="btn btn-danger"
                                        data-bs-toggle="modal" data-bs-target="#deleteModal">Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                {/*// <!-- Modal -->*/}
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                     aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                ...
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close
                                </button>
                                <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Save changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}