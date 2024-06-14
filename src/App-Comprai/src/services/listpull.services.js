import API from "./webapi.services";
import { Base_URL } from "./urls";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const getList = async (idUser) => {
  const userId = await AsyncStorage.getItem('idUser') 
  try {
    const response = await API.get(`${Base_URL}/listas`,{
        params:{
            idUser: userId,
        }
    });

    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
