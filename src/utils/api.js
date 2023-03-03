import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1";

const params = {
    // key: "AIzaSyDfyo2Ezo4HajK6KIFQPCukjZjPlwpu9xo",
    // cx: "c567a5e6cfbb841a6",
    key: "AIzaSyCS34OKrZsn0vzsFzjkIFPNGlOF66q0abY",
    cx: "0f09b8666c8b9fb8c",
};

export const fetchDataFromApi = async (payload) => {
    const { data } = await axios.get(BASE_URL, {
        params: { ...params, ...payload },
    });
    return data;
};
