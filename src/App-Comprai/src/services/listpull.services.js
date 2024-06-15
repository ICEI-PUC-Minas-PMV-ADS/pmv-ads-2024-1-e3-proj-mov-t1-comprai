import API from "./webapi.services";
import { Base_URL } from "./urls";
import { useUser } from "../contexts/UseContexts";

export const getList = async () => {
  const { id } = useUser();
  try {
    const response = await API.get(`${Base_URL}/listas`);
    return response.data.filter((item) => item.idUser === id);
  } catch (error) {
    console.error(error);
    return null;
  }
};
