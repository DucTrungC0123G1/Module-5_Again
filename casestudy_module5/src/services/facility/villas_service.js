import axios from "axios";

export const getVillaList = async ()=>{
    try {
        const result = await axios.get(`http://localhost:8080/villas`);
        return  result.data;
    }catch (e) {
        console.log(e)
    }
}