import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {toast} from "react-toastify";
import {deleteVilla, getAll} from "../../../services/facility/villas_service";
import {getListTypeRental} from "../../../services/type-rental/type_rental";
import {DeleteVilla} from "./DeleteVilla";
import CustomerDelete from "../../customer/DeleteCustomer";

export function VillaList() {
    const [villas, setVillas] = useState([]);
    const [modalStatus, setModalStatus] = useState(false);
    const [selectVilla, setSelectVilla] = useState();
    const [nameSearch, setNameSearch] = useState("");
    const [searchType, setSearchType] = useState("");
    const [typeRental, setTypeRental] = useState([]);

    useEffect(() => {
        getVilla()
        listTypeRent()
    }, [nameSearch, searchType]);

    const getVilla = async () => {
        const response = await getAll(nameSearch, searchType);
        // console.log(response);
        setVillas(response.data);
    }

    const listTypeRent = async () => {
        const response = await getListTypeRental();
        setTypeRental(response);
    }
    const handleModal = (c) => {
        setModalStatus(true);
        setSelectVilla(c);
    }
    const closeModal = () => {
        setModalStatus(false);
        // getCustomer();
    }
    const getSearch = () => {
        const nameSearch = document.getElementById("nameSearch").value;
        const typeSearch = document.getElementById("typeSearch").value;
        setSearchType(typeSearch);
        setNameSearch(nameSearch);
        console.log("_____load id type")
        console.log(typeSearch)
    }

    return (
        <div className="container" style={{minHeight: "600px"}}>
            <h1 style={{textAlign: "center"}}>Villa List</h1>
            <Link to="/villas/create">
                <button className="btn btn-primary">Create</button>
            </Link>
            <div className="container">
                <div className="form-outline" style={{display: 'flex'}}>
                    {/*onChange={(evt)=>{setNameSearch(evt.target.value)}}*/}
                    <Link className="btn btn-outline-primary" to="/customer-add">Add</Link>
                    <input style={{marginLeft: '70%', width: '15%'}} type="text" id="nameSearch"
                           className="form-control" placeholder="Search Name"/>
                    <div>
                        <select style={{width: '100%'}} id="typeSearch" className="form-select"
                                aria-label="Default select example">
                            <option value="">Select</option>
                            {typeRental.map((typeRental) => (
                                <option key={typeRental.id} value={typeRental.id}>{typeRental.name}</option>
                            ))}
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={() => getSearch()}>
                        <i className="fas fa-search"/>
                    </button>
                </div>

                <div className="row">
                    {villas.length !== 0 ?
                        villas.map(villa => (
                            <div className="col-12 col-sm-6 col-xl-4 mt-4" key={villa.id}>
                                <div className="card size-card">
                                    <a href="#">
                                        <img src={villa.image} className="card-img-top" alt="..."/>
                                    </a>
                                    <div className="card-body">
                                        <p className="card-text">{villa.name}<br/>
                                            Room size: {villa.area}<br/>
                                            Type Rent : {villa.typeRental.name}<br/>
                                            <Link className="btn btn-outline-success"
                                                  to={`/villas/update/${villa.id}`}>Update</Link>
                                            {/*<button className="btn btn-outline-danger ms-2"*/}
                                            {/*        onClick={() => handleModal(value)}>Xóa*/}
                                            {/*</button>*/}
                                            <Link style={{marginLeft: "10px"}} to="/villas"
                                                  className="btn btn-outline-danger"
                                                  onClick={() => handleModal(villa)}>
                                                Delete
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )) :
                        (
                            <td style={{textAlign: "center", fontSize: "25px"}}> No data</td>
                        )
                    }
                </div>
                <CustomerDelete
                    isModalShow={modalStatus}
                    selectedVilla={setSelectVilla}
                    closeModal={closeModal}
                >
                </CustomerDelete>
            </div>
        </div>
    )
}