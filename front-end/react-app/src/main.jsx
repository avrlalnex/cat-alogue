import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Pages/Home/Home.jsx';
import SignUp from './Pages/SignUp/SignUpForm.jsx';
import Login from './Pages/Login/LoginForm.jsx';
import CatIn from './Pages/Cats/CatIn.jsx';
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import CatsPage from './Pages/Cats/CatsPage.jsx';
import CatProfile from './Pages/Cats/CatProfile.jsx';
import AccountProfile from './Pages/Account/AccountProfile.jsx';
import AccountFave from './Pages/Account/AccountFave.jsx';
import AccountCats from './Pages/Account/AccountCats.jsx';
import Logout from './Pages/Login/Logout.jsx';

const router = createBrowserRouter(
 [{
  path: "/",
  element: <Home/>,
 },{
  path:"/login",
  element: <Login/>
 },{
  path:"/logout",
  element:<Logout/>
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
  path:"/profile/view",
  element:<AccountProfile/>
 },
 {
  path:"/profile/favorites",
  element:<AccountFave/>
 },
 {
  path:"/profile/cats",
  element:<AccountCats/>
 }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

