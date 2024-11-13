import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layouts/Main';
import Home from './Compontents/Home/Home';
import Login from './Compontents/Login/Login';
import Regigter from './Compontents/Regigter/Regigter';
import SignUp from './Compontents/SignUp/SignUp';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Regigter></Regigter>
      },
      {
        path:'/signup',
        element:<SignUp></SignUp>
      }
    ]
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
