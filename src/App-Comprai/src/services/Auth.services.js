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

export const update = async (id, param) => {
    try {
        return await API.put(`${Base_URL}/login/${id}`, param).then(
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