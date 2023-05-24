import { RouterProvider, createBrowserRouter } from "react-router-dom";

import React from "react";
import ReactDOM from "react-dom/client";
import Sign from "./routes/Signup/sign";
import Login from "./routes/Login/index";
import Products from "./routes/production/Products";
import CartProduct from "./routes/Cart";
import Index from "./routes/landingPage/Index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/signup",
    element: <Sign />,
  },
  { path: "/login", element: <Login /> },
  {
    path: "/main",
    element: <Products />,
  },
  {
    path: "/cart",
    element: <CartProduct />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);