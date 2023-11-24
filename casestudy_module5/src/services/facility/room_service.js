import axios from "axios";

export const getRoomList = async () => {
    try {
        const res = await axios.get(`http://localhost:8080/Room`)
        return res.data;
    }catch (e) {
        return e

    }
}