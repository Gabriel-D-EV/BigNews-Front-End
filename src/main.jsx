import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Search } from './pages/search/Search';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import  Home  from './pages/home/Home.jsx';
import { Navbar } from './components/navbar/Navbar.jsx';
import { GlobalStyle } from './GlobalStyled.js';
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx';
import { Auth } from './pages/Auth/Auth.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/search/:title",
        element: <Search />
      },
    ],
  },
  {
    path: "/auth",
    element: <Auth />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router}/> 
  </React.StrictMode>,
)
