import API from "./webapi.services"
import { Base_URL } from "./urls"

// GET 
export const getlistas = async () => {
    try {
        return await API.get(`${Base_URL}/listas`).then(
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

// POST
export const criarLista = async (nomeLista) => {
    try {
        const idUser = await AsyncStorage.getItem('idUser');
        const response = await api.post('/listas', { name: nomeLista, idUser });
        return response.data;
    } catch (error) {
        console.error("Erro ao criar lista: ", error);
        throw error;
    }
};