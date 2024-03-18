import axios from "axios";
import Cookies from "js-cookie";


const baseURL = ("https://big-news.onrender.com");



export function getAllNews() {
  const response = axios.get(`${baseURL}/news`);
  return response;
}

export function getTopNew() {
  const response = axios.get(`${baseURL}/news/top`);
  return response;
}

export function searchNews(title) {
  const response = axios.get(`${baseURL}/news/search?title=${title}`);
  return response;
}

export function getAllNewsByUser() {
  const response = axios.get(`${baseURL}/news/byUser`, {
    headers: {
        Authorization: `Bearer ${Cookies.get("token")}`
    }
});
  return response;
}

export function createNews() {
  const response = axios.post(`${baseURL}/news/create`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`
  }
  });
  return response;
}
