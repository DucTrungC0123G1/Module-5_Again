import axios from "axios";

export const getAllContract = async () => {
    try {
        const res = await axios.get(`http://localhost:8080/Contracts`)
        return res.data
    } catch (e) {
        console.log(e)
    }
}