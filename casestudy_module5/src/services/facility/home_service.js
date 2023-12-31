import axios from "axios";

export const getHouseList = async (searchName, searchType) => {
    if (searchType === "") {
        try {
            const response = await axios.get(`http://localhost:8080/House?name_like=${searchName}`);
            // console.log(response);
            return response.data;
        } catch (e) {
            console.log("------------------")
            console.log(e)
        }
    } else {
        try {
            const response = await axios.get(`http://localhost:8080/House?name_like=${searchName}&typeRental.id_like=${searchType}`);
            // console.log(response);
            return response.data;
        } catch (e) {
            console.log(e)
        }

    }

}
export const removeHouse = async (id) => {
    const res = await axios.delete(`http://localhost:8080/House/${id}`);
    return res;
}