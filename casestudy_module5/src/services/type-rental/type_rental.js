import axios from "axios";

export const getListTypeRental = async () => {
    try {
        const result = axios.get(`http://localhost:808/TypeRental`);
    }catch (e) {
        console.log(e);
    }
}