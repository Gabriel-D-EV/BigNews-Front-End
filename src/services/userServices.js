import axios from "axios";
import Cookies from "js-cookie";

//const baseURL = "https://big-news.onrender.com";
const baseURL = "http://localhost:3000";

export async function signup(data) {
  delete data.password2;
  const body = {
    ...data,
    username: aleatorioUser(data.name),
    avatar:
      "https://img2.gratispng.com/20180603/jx/kisspng-user-interface-design-computer-icons-default-stephen-salazar-photography-5b1462e1b19d70.1261504615280626897275.jpg",
  };
  const response = await axios.post(`${baseURL}/user/signup`, body);
  const login = { email: data.email, password: data.password };
  const responsel = axios.post(`${baseURL}/auth`, login);

  return response, responsel;
}

export async function signin(data) {
  const response = await axios.post(`${baseURL}/auth`, data);
  return response;
}

export async function userLogado() {
  try {
    const id = Cookies.get("id");
    const token = Cookies.get("token");
    const response = await axios.get(`${baseURL}/user/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.error("Erro ao buscar usuario", error);
  }
  throw error;
}

function aleatorioUser(name) {
  const semEspacoLower = name.replace(/\s/g, "").toLowerCase();
  const randomNumber = Math.floor(Math.random() * 10000);
  return `${semEspacoLower}${randomNumber}`;
}

export async function userUpdate(data) {
  try {
    const id = Cookies.get("id");
    console.log(id);
    const response = await axios.patch(`${baseURL}/user/${id}`, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response;
  } catch (error) {
    console.log("Erro ao atualizar usuario", error);
  }
}
