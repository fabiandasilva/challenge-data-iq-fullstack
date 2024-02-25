import { getImgs } from "../imgUserServices";
import { getUsers } from "../userServices";

const getUsersWithImg = async () => {
  try {
    const userApi = await getUsers();

    const imgApi = await getImgs();

    if (userApi.length > 0 && imgApi.length > 0) {
      userApi.forEach((user, index) => {
        user.pictureUrl = imgApi[index].picture;
      });
    }
    // console.log(userApi);

    return userApi;
  } catch (error) {
    throw new Error(`Error en: ${error.message}`);
  }
};

export default getUsersWithImg;
