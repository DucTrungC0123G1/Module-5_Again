import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {getListTypeRental} from "../../../services/type-rental/type_rental";
import {getRoomList} from "../../../services/facility/room_service";
import {DeleteRoom} from "./DeleteRoom";

export function RoomList() {
    const [rooms, setRooms] = useState([]);
    const [modalStatus, setModalStatus] = useState(false);
    const [selectedRoom, setSelectedRoom] = useState();
    const [nameSearch, setNameSearch] = useState("");
    const [searchType, setSearchType] = useState("");
    const [typeRental, setTypeRental] = useState([]);

    useEffect(() => {
        getRoom()
        listTypeRent()
    }, [nameSearch, searchType]);

    const getRoom = async () => {
        const response = await getRoomList(nameSearch,searchType);
        // console.log(response);
        setRooms(response);
    }

    const listTypeRent = async () => {
        const res = await getListTypeRental(searchType);
        console.log(res)
        setTypeRental(res);
    }
    const handleModal = (c) => {
        setModalStatus(true);
        setSelectedRoom(c);
    }
    const closeModal = () => {
        setModalStatus(false);
        getRoom();

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
                    {rooms.length !== 0 ?
                        rooms.map((room) => (
                            <div className="col-12 col-sm-6 col-xl-4 mt-4" key={room.id}>
                                <div className="card size-card">
                                    <a href="#">
                                        <img src={room.image} className="card-img-top" alt="..."/>
                                    </a>
                                    <div className="card-body">
                                        <p className="card-text">{room.name}<br/>
                                            Room size: {room.area}<br/>
                                            Type Rent : {room.typeRental.name}<br/>
                                            <Link className="btn btn-outline-success"
                                                  to={`/villas/update/${room.id}`}>Update</Link>
                                            {/*<button className="btn btn-outline-danger ms-2"*/}
                                            {/*        onClick={() => handleModal(value)}>Xóa*/}
                                            {/*</button>*/}
                                            <button style={{marginLeft: "10px"}}
                                                    className="btn btn-outline-danger"
                                                    onClick={() => handleModal(room)}>
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
                <DeleteRoom
                    isModalShow={modalStatus}
                    selectedRoom={selectedRoom}
                    closeModal={closeModal}
                >
                </DeleteRoom>
            </div>
        </div>
    )
}