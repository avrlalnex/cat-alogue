import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home/Home.jsx';
import Login from './Login/LoginForm.jsx';
import CatIn from './Cats/CatIn.jsx';
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter(
 [{
  path: "/",
  element: <Home />,
 },{
  path:"/login",
  element: <Login/>
 },{
  path:"/cat",
  element: <CatIn/>
 }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

