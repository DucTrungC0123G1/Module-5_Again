import axios from "axios";

export const getListTypeRental = async () => {
    try {
        const result = axios.get(`http://localhost:8080/TypeRental`);
        return result.data;
    }catch (e) {
        console.log(e);
    }
}