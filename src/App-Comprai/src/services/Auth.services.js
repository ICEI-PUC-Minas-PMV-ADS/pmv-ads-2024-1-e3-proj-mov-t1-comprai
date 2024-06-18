import API from "./webapi.services"
import { Base_URL } from "./urls"

export const register = async (param) => {
    try {
        return await API.post(`${Base_URL}/register`, param).then(
            response => {
                return response.data;
            }, error => {
                console.log(error)
                return null
            }
        )
    } catch (error) {
        console.log(error)
        return null;
    }
}

export const login = async (param) => {
    try {
        return await API.post(`${Base_URL}/login`, param).then(
            response => {
                return response.data;
            }, error => {
                console.log(error)
                return null
            }
        )
    } catch (error) {
        console.log(error)
        return null;
    }
}

//Update User
export const update = async (id, param) => {
    try {
        return await API.put(`${Base_URL}/users/${id}`, param).then(
            response => {
                return response.data;
            }, error => {
                console.log(error)
                return null
            }
        )
    } catch (error) {
        console.log(error)
        return null;
    }
}

//GET User
export const getUser = async (id, param) => {
    try {
        return await API.get(`${Base_URL}/users/${id}`, param).then(
            response => {
                return response.data;
            }, error => {
                console.log(error)
                return null
            }
        )
    } catch (error) {
        console.log(error)
        return null;
    }
}