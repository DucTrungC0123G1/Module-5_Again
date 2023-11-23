import React, {useEffect, useState} from "react";
import {getVillaList} from "../../services/facility/villas_service";
import {getListTypeRental} from "../../services/type-rental/type_rental";

export function VillaList() {
    const [villas, setVilla] = useState([]);
    const [typeRental, setTypeRental] = useState([]);
    const getAllVilla = async () => {
        const data = await getVillaList();
        setVilla(data)

    }

    const loadTypeRental = async () => {
        const rs = await getListTypeRental();
        setTypeRental(rs);
    }

    useEffect(() => {
        getAllVilla()
        loadTypeRental()
    }, []);
    return (
        <>
            <h1 style={{textAlign: "center"}}>OUR FACILITY</h1>
            <div className="container">
                <div className="card-group" >
                    {villas.map((villa) => (
                            <div key={villa.id}>
                                <div className="card">
                                    <img src={villa.image}
                                         className="card-img-top" style={{width:"600px",height:"300px",marginRight:"5px"}} alt="Hollywood Sign on The Hill"/>
                                    <div className="card-body">
                                        <h5 className="card-title">{villa.name}</h5>
                                        <p className="card-text">Area: {villa.area}</p>
                                        <p className="card-text">Description: {villa.description}</p>
                                        <p className="card-text">Description: {villa.typeRental.name}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
        </>
    )
}