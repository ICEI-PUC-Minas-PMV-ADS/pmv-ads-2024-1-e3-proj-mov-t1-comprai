import API from "./webapi.services"
import { Base_URL } from "./urls"

export const getList = async () => {
    try {
        return await API.get(`${Base_URL}/644/listas`).then(
            Response => {
                return Response.data;
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