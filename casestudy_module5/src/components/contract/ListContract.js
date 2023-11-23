import React, {useEffect, useState} from "react";
import {getAllContract} from "../../services/contract/contractService";

export function ListContract() {
    const [contract, setContract] = useState([]);


    const getContract = async () => {
        const data = await getAllContract();
        setContract(data)
    }
    useEffect(() => {
        getContract()
    }, [])

    return (
        <>
            <div style={{minHeight:"28rem",marginTop: "5rem"}}>
                <h1 style={{textAlign:"center"}}>Danh sách hợp đồng</h1>
                <table className="table table-striped table-hover mt-2">
                    <thead>
                    <th>STT</th>
                    <th>Số hợp đồng</th>
                    <th>Ngày bắt đầu</th>
                    <th>Ngày kết thúc</th>
                    <th>Số tiền cọc trước</th>
                    <th>Tổng tiền</th>
                    </thead>
                    <tbody>
                    {contract.map((item, index) => (
                            <tr key={item.id}>
                                <td>{index}</td>
                                <td>{item.code}</td>
                                <td>{item.dateStart}</td>
                                <td>{item.dateEnd}</td>
                                <td>{item.depositMoney}</td>
                                <td>{item.totalMoney}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </>
    )
}