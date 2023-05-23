<<<<<<< HEAD
import React from 'react'
import ReactDOM from 'react-dom/client'
import Signup from './routes/Signup/sign'
import Index from './routes/landingPage/Index'
=======
import React from "react";
import ReactDOM from "react-dom/client";
import Index from "./routes/landingPage/Index";
import Signup from "./routes/Signup/Signup";
import Login from "./routes/Login/index";
>>>>>>> main

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Cart from './routes/Carts/Cart'
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
<<<<<<< HEAD
    path: '/carts',
    element: <Cart />

  }
=======
    path: "/login",
    element: <Login />,
  },
>>>>>>> main
]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
