import axios from "axios";
import Cookies from "js-cookie";


const baseURL = ("https://big-news.onrender.com");
//const baseURL = ("http://localhost:3000");

export function getAllNews() {
  const response = axios.get(`${baseURL}/news`);
  return response;
  console.log(response);
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
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
}

export function createNews(data) {
  const response = axios.post(`${baseURL}/news/create`, data, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
    
  });
  return response;
}

export function deleteNews(id) {
  const response = axios.delete(`${baseURL}/news/${id}`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  })
  return response
}

export function updateNew(body, id) {
  const response = axios.patch(`${baseURL}/news/update/${id}`, body, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  })
  return response
}

export function getNewById(id) {
  const response = axios.get(`${baseURL}/news/getNewById/${id}`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  })
  return response
}