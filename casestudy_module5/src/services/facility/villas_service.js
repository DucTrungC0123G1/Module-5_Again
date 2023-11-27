import axios from "axios";

export const getAll = async (searchName,searchType)=>{
    if (searchType === "") {
        try {
            const response = await axios.get(`http://localhost:8080/Villas?name_like=${searchName}`);
            // console.log(response);
            return response.data;
        } catch (e) {
            console.log(e)
        }
    }else {
        try {
            const response = await axios.get(`http://localhost:8080/Villas?name_like=${searchName}&typeRent.id_like=${searchType}`);
            // console.log(response);
            return response.data;
        } catch (e) {
            console.log(e)
        }

    }

}

export const create = async (data) => {
    console.log(data);
    const response = await axios.post(`http://localhost:8080/Villas`,data);
    console.log(response);
    return response;
}

export const deleteVilla = async (id) => {
    const response = await axios.delete(`http://localhost:8080/Villas` + `/${id}`);
    console.log(response)
    return response;
}

export const findById = async (id) => {
    const response = await axios.get(`http://localhost:8080/Villas` + `/${id}`);
    return response.data;
}

export const updateVilla = async (villa) => {
    const response = await axios.put(`http://localhost:8080/Villas` + `/${villa.id}`,villa);
    console.log(response)
    return response;
}
