import axios from "axios";

export const getRoomList = async (searchName, searchType) => {
    if (searchType === "") {
        try {
            const response = await axios.get(`http://localhost:8080/Room?name_like=${searchName}`);
            // console.log(response);
            return response.data;
        } catch (e) {
            console.log("------------------")
            console.log(e)
        }
    } else {
        try {
            const response = await axios.get(`http://localhost:8080/Room?name_like=${searchName}&typeRental.id_like=${searchType}`);
            // console.log(response);
            return response.data;
        } catch (e) {
            console.log(e)
        }

    }

}
export const removeRoom = async (id) => {
    const res = await axios.delete(`http://localhost:8080/Room/${id}`);
    return res;
}

export const createNewRoom = async (room) => {
    try {
        return await axios.post(`http://localhost:8080/Room`, room);
    } catch (e) {
        return e
    }

}
export const getRoomById = async (id) => {
    const rs = await axios.get(`http://localhost:8080/Room/${id}`);
    return rs.data
}

export const updateRoom = async (room) => {
    try {
        return await axios.put(`http://localhost:8080/Room/${room.id}`, room);
    } catch (e) {
        return e;
    }
}