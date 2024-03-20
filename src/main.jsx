import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Search } from "./pages/search/Search";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import { Navbar } from "./components/navbar/navbar.jsx";
import { GlobalStyle } from "./GlobalStyled.js";
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx";
import { Auth } from "./pages/Auth/Auth.jsx";
import { Profile } from "./pages/profile/Profile.jsx";
import UserProvider from "./context/userContext.jsx";
import { AddNews } from "./pages/addNews/addNews.jsx";
import { UserUpdate } from "./pages/userUpdate/UserUpdate.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/search/:title",
        element: <Search />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/addnews",
        element: <AddNews />,
      },
      {
        path: "/userupdate",
        element: <UserUpdate />,
      },
    ],
  },
  {
    path: "/auth",
    element: <Auth />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);
