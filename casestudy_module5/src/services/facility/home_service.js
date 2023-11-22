import axios from "axios";

export const getListHome = async () => {
    try {
        const result = await axios.get(`http://localhost:808/House`);
        return result.data;

    } catch (e) {
        console.log(e)
    }
}