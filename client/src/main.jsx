import { RouterProvider, createBrowserRouter } from "react-router-dom";

import React from "react";
import ReactDOM from "react-dom/client";
import Index from "./routes/landingPage/Index";
import Sign from "./routes/Signup/sign";
import Login from "./routes/Login/index";
import Products from "./routes/production/Products";

import Cart from "./routes/Carts/Cart";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/signup",
    element: <Sign />,
  },
  {
    path: "/carts",
    element: <Cart />,
  },
  { path: "/login", element: <Login /> },
  {
    path: "/main",
    element: <Products />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
