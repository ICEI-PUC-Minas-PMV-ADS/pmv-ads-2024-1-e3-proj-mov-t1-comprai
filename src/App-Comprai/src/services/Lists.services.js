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
export const criarLista = async (nomeLista, lista, idUser) => {
    try {
        console.log('here')
        console.log(lista, idUser, nomeLista)
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