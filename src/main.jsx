import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainRoutes from './Routes/MainRoutes';
import Home from './Pages/Home/Home';
import FindDoctor from './Pages/FindDoctor/FindDoctor';
import Errorpage from './Pages/ErrorPage/Errorpage';
import Departments from './Pages/Departments/Departments';
import Health from './Pages/Health/Health';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoutes></MainRoutes>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/healths.json')
      },
      {
        path: "/findDoctor",
        element: <FindDoctor></FindDoctor>,
        loader: () => fetch('/healths.json')    
      },
      {
        path: "/departments",
        element: <Departments></Departments>,
        loader: () => fetch('/healths.json')
      },
      {
        path: "/healths/:id",
        element: <Health></Health>,
        loader: () => fetch('/healths.json')
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
