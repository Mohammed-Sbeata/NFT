import React from 'react'
import ReactDOM from 'react-dom/client'
import Signup from './routes/Signup/sign'
import Index from './routes/landingPage/Index'

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
    path: '/carts',
    element: <Cart />

  }
]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
