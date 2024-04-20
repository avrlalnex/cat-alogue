import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home/Home.jsx';
import SignUp from './SignUp/SignUpForm.jsx';
import Login from './Login/LoginForm.jsx';
import CatIn from './Cats/CatIn.jsx';
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import CatsPage from './Cats/CatsPage.jsx';
import CatProfile from './Cats/CatProfile.jsx';
import AccountProfile from './Account/AccountProfile.jsx';

const router = createBrowserRouter(
 [{
  path: "/",
  element: <Home/>,
 },{
  path:"/login",
  element: <Login/>
 },
 {
  path:"/signup",
  element: <SignUp />
 },{
  path:"/cat/add",
  element: <CatIn/>
 },{
  path:"/cat",
  element:<CatsPage/>
 },{
  path:"/cat/view",
  element:<CatProfile/>
 },
 {
  path:"/account",
  element:<AccountProfile/>
 }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

