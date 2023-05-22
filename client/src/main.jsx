import React from 'react'
import ReactDOM from 'react-dom/client'
import Index from './routes/landingPage/Index'
import Signup from './routes/Signup/sign'
import Login from './routes/Login/index'


import { RouterProvider, createBrowserRouter } from 'react-router-dom'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />
  },
  {
    path: '/signup',
    element: <Signup />

  },
  {
    path: '/login',
    element: <Login />

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
