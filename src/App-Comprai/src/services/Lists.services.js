import API from "./webapi.services"
import { Base_URL } from "./urls"
import AsyncStorage from '@react-native-async-storage/async-storage';

// GET
export const getlistas = async () => {
    const userId = await AsyncStorage.getItem('idUser');
    try {
        return await API.get(`${Base_URL}/listas`, {
            params: {
                idUser: userId,
            }
        }).then(
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
export const criarLista = async (nomeLista, idUser, lista) => {
    try {
        const response = await API.post(`${Base_URL}/listas`, {
            nome: nomeLista,
            idUser: idUser,
            lista: lista,
        });
        return response.data;
    } catch (error) {
        console.error('Erro ao submeter a lista:', error);
        throw error;
    }
};

// Delete 
export const deleteLista = async (id) => {
    try {
        const response = await API.delete(`${Base_URL}/listas/${id}`);
        return response.data;
    } catch (error) {
        console.log("Erro ao deletar a lista:", error);
        throw error;
    }
}