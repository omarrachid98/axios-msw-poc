import axios from "axios";

const client = axios.create({
    baseURL: import.meta.env.VITE_AXIOS_CLIENT
});

const getData = async (method: string) => {
    try {
        return client.get(method).then(response => response)
    } catch (e) {
        console.error(e)
    }
}

const axiosFunctions = { getData };

export default axiosFunctions;