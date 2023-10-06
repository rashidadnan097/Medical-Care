import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainRoutes from './Routes/MainRoutes';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoutes></MainRoutes>,
    children: [
      {
        
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
