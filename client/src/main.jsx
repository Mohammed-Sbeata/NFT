import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Signup from './routes/Signup'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
const router = createBrowserRouter([
  {
    path: '/signup',
    element: <Signup />

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
