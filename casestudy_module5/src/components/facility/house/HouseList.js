import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {getListTypeRental} from "../../../services/type-rental/type_rental";
import {getHouseList} from "../../../services/facility/home_service";
import {DeleteHouse} from "./DeleteHouse";

export function HouseList() {
    const [houses, setHouses] = useState([]);
    const [modalStatus, setModalStatus] = useState(false);
    const [selectedHouse, setSelectedHouse] = useState();
    const [nameSearch, setNameSearch] = useState("");
    const [searchType, setSearchType] = useState("");
    const [typeRental, setTypeRental] = useState([]);

    useEffect(() => {
        getHouse()
        listTypeRent()
    }, [nameSearch, searchType]);

    const getHouse = async () => {
        const response = await getHouseList(nameSearch,searchType);
        // console.log(response);
        setHouses(response);
    }

    const listTypeRent = async () => {
        const res = await getListTypeRental(searchType);
        console.log(res)
        setTypeRental(res);
    }
    const handleModal = (c) => {
        setModalStatus(true);
        setSelectedHouse(c);
    }
    const closeModal = () => {
        setModalStatus(false);
        getHouse();

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
            <h1 style={{textAlign: "center"}}>Room List</h1>
            <div className="container">
                <div className="form-outline" style={{display: 'flex'}}>
                    {/*onChange={(evt)=>{setNameSearch(evt.target.value)}}*/}
                    <Link className="btn btn-outline-primary" to="/room-add">Add</Link>
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
                    {houses.length !== 0 ?
                        houses.map((house) => (
                            <div className="col-12 col-sm-6 col-xl-4 mt-4" key={house.id}>
                                <div className="card size-card">
                                    <a href="#">
                                        <img style={{height:"300px",width:"400px"}} src={house.image} className="card-img-top" alt="..."/>
                                    </a>
                                    <div className="card-body">
                                        <p className="card-text">{house.name}<br/>
                                            Room size: {house.area}<br/>
                                            Type Rent : {house.typeRental.name}<br/>
                                            <Link className="btn btn-outline-success"
                                                  to={`/villas/update/${house.id}`}>Update</Link>
                                            {/*<button className="btn btn-outline-danger ms-2"*/}
                                            {/*        onClick={() => handleModal(value)}>Xóa*/}
                                            {/*</button>*/}
                                            <button style={{marginLeft: "10px"}}
                                                    className="btn btn-outline-danger"
                                                    onClick={() => handleModal(house)}>
                                                Delete
                                            </button>
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
                <DeleteHouse
                    isModalShow={modalStatus}
                    selectedHouse={selectedHouse}
                    closeModal={closeModal}
                >
                </DeleteHouse>
            </div>
        </div>
    )
}