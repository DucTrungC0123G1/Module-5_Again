import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {getContractList} from "../../services/contract/contractService";
import DeleteContract from "./DeleteContract";

export function ListContract() {
    const [contract, setContract] = useState([]);
    const [modalStatus, setModalStatus] = useState(false);
    const [selectedContract, setSelectedContract] = useState();
    const [codeSearch, setCodeSearch] = useState("")
    const getContract = async () => {
        const data = await getContractList(codeSearch);
        setContract(data)
        console.log(contract)
    }
    useEffect(() => {
        getContract()
    }, [codeSearch]);
    const handleModal = (c) => {
        setModalStatus(true);
        setSelectedContract(c);
    }
    const closeModal = () => {
        setModalStatus(false);
        getContract();
    }
    const getSearch = () => {
        const codeSearch = document.getElementById("codeSearch").value;
        setCodeSearch(codeSearch);
    }
    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });

    return (
        contract && (
            <>
                <h1 className="title" style={{textAlign:"center"}}>List Contract</h1>
                <div className="container">
                    <div className="form-outline" style={{display: 'flex'}}>
                        <Link className="btn btn-outline-primary" to="/contract-add">Add</Link>
                        {/*onChange={(evt)=>{setNameSearch(evt.target.value)}}*/}
                        <input style={{marginLeft: '70%', width: '30%'}} type="text" id="codeSearch"
                               className="form-control" placeholder="Search Code"/>
                        <button type="submit" className="btn btn-primary" onClick={() => getSearch()}>
                            <i className="fas fa-search"/>
                        </button>
                    </div>
                    <div className="table">
                        <table className="table">
                            <thead>
                            <tr id="header">
                                <th>#</th>
                                <th>Contract Code</th>
                                <th>Date - Start</th>
                                <th>Date - End</th>
                                <th>Deposit</th>
                                <th>Total</th>
                                <th colSpan={2}>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {contract.length !== 0 ?
                                contract.map((c, index) => (
                                    <tr key={c.id}>
                                        <td>{index + 1}</td>
                                        <td>{c.code}</td>
                                        <td>{c.dateStart}</td>
                                        <td>{c.dateEnd}</td>
                                        <td>{VND.format(c.depositMoney)}</td>
                                        <td>{VND.format(c.totalMoney)}</td>
                                        <td>
                                            <Link className="btn btn-outline-primary" to={`/contract-edit/${c.id}`}>Edit</Link>
                                            <button onClick={() => handleModal(c)}
                                                    className="btn btn-outline-danger">Delete
                                            </button>
                                        </td>
                                    </tr>
                                )) : (
                                    <td><b>No data</b></td>
                                )
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
                <DeleteContract
                    isModalShow={modalStatus}
                    selectedContract={selectedContract}
                    closeModal={closeModal}
                />
            </>

        )
    )
}