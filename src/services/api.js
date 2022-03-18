import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:5000"
})

export const getProdutos = async (userId) => {
    let url = `/users/${userId}/products`;

    return api.get(url);
}
