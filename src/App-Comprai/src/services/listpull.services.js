import API from "./webapi.services";
import { Base_URL } from "./urls";

export const getList = async (userId) => {
  try {
    return await API.get(`${Base_URL}/listas`).then(
      (response) => {
        return response.data.filter((item) => item.idUser === userId);
      },
      (error) => {
        console.log(error);
        return null;
      }
    );
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getListById = async (listId) => {
  try {
    return await API.get(`${Base_URL}/listas/${listId}`).then(
      (response) => {
        return response.data;
      },
      (error) => {
        console.log(error);
        return null;
      }
    );
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const postList = async (param) => {
  try {
    return await API.post(`${Base_URL}/listas`, param).then(
      (response) => {
        return response.data;
      },
      (error) => {
        console.log(error);
        return null;
      }
    );
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const putList = async (listId, param) => {
  try {
    return await API.put(`${Base_URL}/listas/${listId}`, param).then(
      (response) => {
        console.log(response.data)
        return response.data;
      },
      (error) => {
        console.log(error);
        return null;
      }
    );
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const deleteList = async (listId) => {
  try {
      return await API.delete(`${Base_URL}/listas/${listId}`).then(
        (response) => {
          return response.data;
        },
        (error) => {
          console.log(error);
          return null;
        }
      );
  } catch (error) {
      console.log("Erro ao deletar a lista:", error);
      throw error;
  }
}
