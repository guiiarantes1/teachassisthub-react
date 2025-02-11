import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Home } from './pages/Home.jsx'
import {Login} from "./pages/Login.jsx"
import './index.css'
import {createBrowserRouter, RouterProvider, Route} from 'react-router-dom';
import { Menu } from './pages/Menu.jsx'



const router = createBrowserRouter([
  {
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/menu",
        element: <Menu/>
      },
   
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)