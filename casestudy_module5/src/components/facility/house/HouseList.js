import React, {useEffect, useState} from "react";
import {getRoomList} from "../../../services/facility/room_service";
import {getListTypeRental} from "../../../services/type-rental/type_rental";
import {getListHome} from "../../../services/facility/home_service";

export function HouseList() {
    const [house, setHouse] = useState([]);
    const [typeRental, setTypeRental] = useState([]);


    const getAllHouse = async () => {
        const data = await getListHome()
        setHouse(data)
    }
    const loadTypeRental = async () => {
        const res = await getListTypeRental();
        setTypeRental(res);
    }


    useEffect(() => {
        getAllHouse()
        loadTypeRental()
    }, [])


    return (
        <>
            <>
                <h1 style={{textAlign: "center"}}>Room</h1>
                <div className="container">
                    <div className="card-group">
                        {house.map((house) => (
                                <div key={house.id}>
                                    <div className="card">
                                        <img src={house.image}
                                             className="card-img-top"
                                             style={{width: "600px", height: "300px", marginRight: "5px"}}
                                             alt="Hollywood Sign on The Hill"/>
                                        <div className="card-body">
                                            <h5 className="card-title">{house.name}</h5>
                                            <p className="card-text">Area: {house.area}</p>
                                            <p className="card-text">Description: {house.description}</p>
                                            <p className="card-text">Description: {house.typeRental.name}</p>
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