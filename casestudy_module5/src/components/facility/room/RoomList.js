import React, {useEffect, useState} from "react";
import {getRoomList} from "../../../services/facility/room_service";
import {VillaList} from "../villa/VillaList";
import {getListTypeRental} from "../../../services/type-rental/type_rental";

export function RoomList() {
    const [room, setRoom] = useState([]);
    const [typeRental, setTypeRental] = useState([]);


    const getAllRoom = async () => {
        const data = await getRoomList()
        setRoom(data)
    }
    const loadTypeRental = async () => {
        const rs = await getListTypeRental();
        setTypeRental(rs);
    }


    useEffect(() => {
        getAllRoom()
        loadTypeRental()
    },[])


    return (
        <>
            <>
                <h1 style={{textAlign: "center"}}>OUR FACILITY</h1>
                <div className="container">
                    <div className="card-group">
                        {room.map((room) => (
                                <div key={room.id}>
                                    <div className="card">
                                        <img src={room.image}
                                             className="card-img-top"
                                             style={{width: "600px", height: "300px", marginRight: "5px"}}
                                             alt="Hollywood Sign on The Hill"/>
                                        <div className="card-body">
                                            <h5 className="card-title">{room.name}</h5>
                                            <p className="card-text">Area: {room.area}</p>
                                            <p className="card-text">Description: {room.description}</p>
                                            <p className="card-text">Description: {room.typeRental.name}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </>
        </>
    )

}