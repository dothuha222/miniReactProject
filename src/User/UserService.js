import axios from "axios";

const API_PATH = "http://localhost:8000/info"

export const getUsers = () => {
    return axios.get(API_PATH)
}

export const getUsersById =  (id) => {
    return axios.get(`${API_PATH}/${id}`)
}

export const createUsers= (data) => {
    return axios.post(API_PATH, data)
}

export const updateUsers= (id,data) => {
    return axios.put(`${API_PATH}/${id}`,data)
}

export const deleteUsers= (id) => {
    return axios.delete(`${API_PATH}/${id}`)
}

