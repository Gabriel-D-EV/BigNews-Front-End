import axios from "axios";
import Cookies from "js-cookie";


//const baseURL = ("https://big-news.onrender.com");
const baseURL = ("http://localhost:3000");



export function signup(data) {
    delete data.password2;
    const body = { ...data, username: aleatorioUser(data.name), avatar: "https://img2.gratispng.com/20180603/jx/kisspng-user-interface-design-computer-icons-default-stephen-salazar-photography-5b1462e1b19d70.1261504615280626897275.jpg" }
    const response = axios.post(`${baseURL}/user/signup`, body);
    const login = { email: data.email, password: data.password }
    const responsel = axios.post(`${baseURL}/auth`, login);
    
    return response, responsel;
}

export function signin(data) {
    const response = axios.post(`${baseURL}/auth`, data);
    return response;
}

export async function userLogado() {
   try {
    const response = await axios.get(`${baseURL}/user/${Cookies.get("id")}`, {
        headers: {
            Authorization: `Bearer ${Cookies.get("token")}`
        }
    });
    return response;
   } catch (error) {
    console.error("Erro ao buscar usuario", error)
    };
    throw error;
}

function aleatorioUser(name) {
    const semEspacoLower = name.replace(/\s/g, "").toLowerCase();
    const randomNumber = Math.floor(Math.random() * 1000);
    return `${semEspacoLower}${randomNumber}`
}

export function userUpdate(data) {
    const response = axios.put(`${baseURL}/user/${Cookies.get("id")}`, data);
    return response;
}