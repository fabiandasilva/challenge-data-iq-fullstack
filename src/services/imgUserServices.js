const API_URL_IMG = "https://randomuser.me/api/?inc=picture&results=10";
const getImgs = async () => {
  try {
    const response = await fetch(API_URL_IMG);
    if (!response.ok) {
      throw new Error("Error al obtener las imagenes", response.status);
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { getImgs };
