import axios from "axios";

export const api = axios.create({
    baseURL:'https://api-stage-8-rocketnotes.onrender.com'
});

