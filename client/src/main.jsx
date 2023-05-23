
import React from "react";
import ReactDOM from "react-dom/client";
import Index from "./routes/landingPage/Index";
import Signup from "./routes/Signup/";
import Login from "./routes/Login/index";
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import CartProduct from "./routes/Cart";
import './main.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path:'/cart',
    element:<CartProduct />
  }
]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
